"use server"

import APP_CONFIG from "../app.config/config";
import { FeedbackSchema } from "../schema/feedback";

export async function userFeedback(prevState: any, formData: FormData) {
  // Convert FormData to a plain object
  const data = Object.fromEntries(formData.entries());
  
  // Validate against our advanced schema
  const result = FeedbackSchema.safeParse(data);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors, 
      enteredValues: data,
    };
  }

  try {
    console.log("Processing valid data:", result.data);
    const response = await fetch(`${APP_CONFIG.server_url}/portfolio/api/v1/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(result.data),
    });

    if (!response.ok) {
      throw new Error("Failed to submit feedback");
    }

    // Return success to the client
    return { 
      success: true, 
      errors: {}, 
      enteredValues: {} 
    };

  } catch (err) {
    console.error("API Error:", err);
    return { 
      success: false, 
      errors: { form: ["Server error. Please try again later."] },
      enteredValues: data // Keep values so the user doesn't lose their input
    };
  }
}