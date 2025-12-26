import { z } from "zod";

export const FeedbackSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
    
  email: z
    .string()
    .trim()
    .lowercase()
    .email("Please enter a valid professional email address"),
    
  message: z
    .string()
    .trim()
    .min(10, "Please provide more detail (at least 10 characters)")
    .max(500, "Message cannot exceed 500 characters"),
    
  number: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits")
    // Example of a "real" check: preventing fake numbers like 0000000000
    .refine((val) => !/^(\d)\1{9}$/.test(val), {
      message: "Please enter a valid phone number, not a repeating sequence",
    }),
});