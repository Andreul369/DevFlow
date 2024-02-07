import { z } from 'zod';

export const questionsSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(100),
  tags: z.array(z.string().min(1).max(15)).min(1).max(5),
});

export const answersSchema = z.object({
  answer: z.string().min(50),
});

export const profileSchema = z.object({
  name: z.string().min(5).max(60),
  username: z.string().min(5).max(50),
  portfolioWebsite: z.string().url(),
  location: z.string().max(70),
  bio: z.string().min(1),
});
