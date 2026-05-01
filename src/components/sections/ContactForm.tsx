'use client';

import { useMemo, useState } from 'react';
import { contactBudgetRanges, contactProjectTypes } from '@/lib/constants';
import { Button } from '@/components/ui/Button';
import { contactSchema, type ContactInput } from '@/lib/contact';

type FieldErrors = Partial<Record<keyof ContactInput, string>>;

const defaultValues: ContactInput = {
  name: '',
  email: '',
  company: '',
  budgetRange: contactBudgetRanges[0],
  projectType: contactProjectTypes[0],
  message: ''
};

export function ContactForm() {
  const [form, setForm] = useState<ContactInput>(defaultValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const charCount = useMemo(() => form.message.length, [form.message.length]);

  function handleChange<K extends keyof ContactInput>(key: K, value: ContactInput[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);

    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === 'string') {
          fieldErrors[key as keyof ContactInput] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(parsed.data)
      });

      const payload = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !payload.ok) {
        throw new Error(payload.message ?? 'Unable to submit your request at this moment.');
      }

      setForm(defaultValues);
      setStatus({
        type: 'success',
        message: 'Your request has been received. Noviqore will get back to you shortly.'
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-200">
            Name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) => handleChange('name', event.target.value)}
            className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2.5 text-slate-100 outline-none ring-0 transition focus:border-lime-300/40"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name ? (
            <p id="name-error" className="text-xs text-rose-300">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => handleChange('email', event.target.value)}
            className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2.5 text-slate-100 outline-none ring-0 transition focus:border-lime-300/40"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email ? (
            <p id="email-error" className="text-xs text-rose-300">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-slate-200">
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={(event) => handleChange('company', event.target.value)}
            className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2.5 text-slate-100 outline-none ring-0 transition focus:border-lime-300/40"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? 'company-error' : undefined}
          />
          {errors.company ? (
            <p id="company-error" className="text-xs text-rose-300">
              {errors.company}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label htmlFor="budgetRange" className="text-sm font-medium text-slate-200">
            Budget Range
          </label>
          <select
            id="budgetRange"
            name="budgetRange"
            value={form.budgetRange}
            onChange={(event) => handleChange('budgetRange', event.target.value as ContactInput['budgetRange'])}
            className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2.5 text-slate-100 outline-none transition focus:border-lime-300/40"
            aria-invalid={Boolean(errors.budgetRange)}
          >
            {contactBudgetRanges.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="projectType" className="text-sm font-medium text-slate-200">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={form.projectType}
          onChange={(event) => handleChange('projectType', event.target.value as ContactInput['projectType'])}
          className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2.5 text-slate-100 outline-none transition focus:border-lime-300/40"
          aria-invalid={Boolean(errors.projectType)}
        >
          {contactProjectTypes.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-200">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={(event) => handleChange('message', event.target.value)}
          className="w-full resize-y rounded-xl border border-white/15 bg-slate-900/70 px-4 py-2.5 text-slate-100 outline-none transition focus:border-lime-300/40"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : 'message-count'}
        />
        <div className="flex items-center justify-between gap-3">
          {errors.message ? (
            <p id="message-error" className="text-xs text-rose-300">
              {errors.message}
            </p>
          ) : (
            <p id="message-count" className="text-xs text-slate-400">
              {charCount}/2000
            </p>
          )}
        </div>
      </div>

      {status ? (
        <p className={status.type === 'success' ? 'text-sm text-emerald-300' : 'text-sm text-rose-300'}>{status.message}</p>
      ) : null}

      <Button type="submit" size="lg" disabled={isSubmitting} aria-label="Submit project inquiry">
        {isSubmitting ? 'Submitting...' : 'Send Project Inquiry'}
      </Button>
    </form>
  );
}



