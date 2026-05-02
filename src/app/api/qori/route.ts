import { NextResponse } from 'next/server';
import { z } from 'zod';
import { answerWithWebsiteKnowledge } from '@/lib/qoriAssistant';

const qoriRequestSchema = z.object({
  query: z.string().trim().min(2).max(320),
  history: z
    .array(
      z.object({
        role: z.enum(['assistant', 'user']),
        content: z.string().max(1500)
      })
    )
    .max(12)
    .optional()
});

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as unknown;
    const parsed = qoriRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: 'Please provide a valid query for Qori.'
        },
        { status: 400 }
      );
    }

    const answer = answerWithWebsiteKnowledge(parsed.data.query);

    // TODO: Add OpenAI/LLM integration here for deeper, contextual multi-turn reasoning.
    // Keep the same response contract: { reply, references }.
    return NextResponse.json({
      ok: true,
      mode: 'website-knowledge',
      reply: answer.reply,
      references: answer.references
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
