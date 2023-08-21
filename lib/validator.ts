/**
 * Validations for Form Inputs
 */

import * as z from "zod";

export const createFeedbackSchema = z.object({
  userName: z.string().min(1, "Please enter a name"),
  userEmail: z.string().min(1, "Please enter a email-address"),
  userFeedbackMessage: z.string(),
});
export type CreateFeedback = z.infer<typeof createFeedbackSchema>;
