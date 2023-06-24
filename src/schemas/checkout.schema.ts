import { z } from "zod";

export const personalSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Please provide a valid email address" }),
});

export type PersonalInfo = z.infer<typeof personalSchema>;
