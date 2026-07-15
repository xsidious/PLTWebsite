import { z } from "zod";

export const applySchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit about yourself"),
});

export type ApplyFormData = z.infer<typeof applySchema>;
