import { API_URL } from "../config/api";
export interface SubmissionResponse {
  success: boolean;
  message: string;
}

export async function submitApplication(
  data: Record<string, string>
): Promise<SubmissionResponse> {
  try {
    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },

      body: JSON.stringify(data),
    });

    const result = await response.json();

    console.log("Server response:", result);

    if (!result.success) {
      return {
        success: false,
        message:
          result.message ||
          "Application submission failed.",
      };
    }

    return {
      success: true,
      message:
        result.message ||
        "Application submitted successfully.",
    };
  } catch (error) {
    console.error("Application submission error:", error);

    return {
      success: false,
      message:
        "Unable to connect to the application server. Please try again.",
    };
  }
}