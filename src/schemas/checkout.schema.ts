import { z } from "zod";

export const personalSchema = z.object({
  name: z.string(),
  email: z.string().email({ message: "Please provide a valid email address" }),
});

export const deliverySchema = z.object({
  province: z.string(),
  district: z.string(),
  munciplity: z.string(),
  tole: z.enum(["Dhapasi", "Baitadi"]),
  delivery: z.string(),
});

export const paymentSchema = z.object({
  number: z.string(),
  expirationDate: z.string(),
  securityCode: z.string(),
  saveInfo: z.boolean(),
});
export type PersonalInfo = z.infer<typeof personalSchema>;
export type DeliveryInfo = z.infer<typeof deliverySchema>;
export type PaymentInfo = z.infer<typeof paymentSchema>;
