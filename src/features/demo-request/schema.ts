import { z } from "zod";

export const demoRequestSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  role: z.enum(["PRINCIPAL", "MANAGER", "ADMIN", "TEACHER", "OTHER"]),
  email: z.email({ message: "Enter a valid email" }),
  phone: z.string().min(7, "Enter a valid phone number"),

  schoolName: z.string().min(2, "School name is required"),
  schoolType: z.string().min(1, "School type is required"),
  numberOfStudents: z.string().min(1, "Number of pupils is required"),

  biggestChallenge: z.array(z.string()).min(1, "Select at least one challenge"),
  preferredDate: z.date({ message: "Select a preferred demo date" }),

  address: z.object({
    line1: z.string().min(2, "Address line 1 is required"),
    line2: z.string().optional().or(z.literal("")),
    suburb: z.string().min(1, "Suburb is required"),
    city: z.string().min(2, "City is required"),
    province: z.string().min(1, "Province is required"),
    postal_code: z.string().min(3, "Postal code is required"),
    country: z.string().min(1),
  }),

  confirmAccuracy: z
    .boolean()
    .refine((v) => v === true, "Please confirm your information is accurate."),

  acceptTerms: z
    .boolean()
    .refine(
      (v) => v === true,
      "You must accept the Terms & Conditions to continue.",
    ),
});

export type DemoRequestSchema = z.infer<typeof demoRequestSchema>;
