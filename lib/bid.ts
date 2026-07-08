import { z } from "zod";

export const bidSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().min(2, "Please enter your company name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Please provide project details"),
});

export type BidFormData = z.infer<typeof bidSchema>;
