import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
});
export const signUpSchema = z.object({
  fullName: z.string().min(2).max(20),
  email: z.string().email(),
});
