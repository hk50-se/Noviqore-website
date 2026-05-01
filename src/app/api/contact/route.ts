import { NextResponse } from 'next/server';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { contactSchema } from '@/lib/contact';

type ProviderResponse = {
  ok: boolean;
  message?: string;
};

async function sendViaWebhook(payload: unknown): Promise<ProviderResponse> {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const authToken = process.env.CONTACT_WEBHOOK_AUTH_TOKEN;
  if (!webhookUrl) {
    return {
      ok: false,
      message: 'CONTACT_WEBHOOK_URL is not configured.'
    };
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`;
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const detail = await response.text();
    return {
      ok: false,
      message: `Webhook provider failed: ${response.status} ${detail}`
    };
  }

  return { ok: true };
}

async function persistSubmissionFallback(payload: unknown) {
  const logDir = path.join(process.cwd(), '.tmp');
  const logPath = path.join(logDir, 'contact-submissions.jsonl');

  await fs.mkdir(logDir, { recursive: true });
  await fs.appendFile(logPath, `${JSON.stringify(payload)}\n`, 'utf8');
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Please provide valid form data.',
          errors: parsed.error.flatten()
        },
        { status: 400 }
      );
    }

    const submission = {
      ...parsed.data,
      submittedAt: new Date().toISOString()
    };

    if (process.env.CONTACT_WEBHOOK_URL) {
      const providerResult = await sendViaWebhook(submission);
      if (!providerResult.ok) {
        return NextResponse.json(
          {
            ok: false,
            message: providerResult.message ?? 'Contact delivery failed.'
          },
          { status: 502 }
        );
      }
    } else {
      // TODO: Replace fallback persistence with a transactional email provider integration.
      // Suggested providers: Resend, SendGrid, AWS SES, or your CRM webhook endpoint.
      await persistSubmissionFallback(submission);
    }

    return NextResponse.json({
      ok: true,
      message: 'Submission received successfully.'
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : 'Unexpected server error.'
      },
      { status: 500 }
    );
  }
}





