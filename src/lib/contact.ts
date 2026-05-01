import { z } from 'zod';
import { contactBudgetRanges, contactProjectTypes } from '@/lib/constants';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.').max(100),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().min(2, 'Company name is required.').max(120),
  budgetRange: z.enum(contactBudgetRanges),
  projectType: z.enum(contactProjectTypes),
  message: z.string().min(20, 'Please share at least 20 characters.').max(2000)
});

export type ContactInput = z.infer<typeof contactSchema>;



