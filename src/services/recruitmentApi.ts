import { API_URL } from "../config/api";

export interface SubmitApplicationResponse {
  success: boolean;
  message: string;
}

export async function submitApplication(
  data: Record<string, string>
): Promise<SubmitApplicationResponse> {
  try {
    const formData = new URLSearchParams();

    Object.entries(data).forEach(
      ([key, value]) => {
        formData.append(key, value);
      }
    );

    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type":
          "application/x-www-form-urlencoded;charset=UTF-8",
      },

      body: formData.toString(),
    });

    const result: SubmitApplicationResponse =
      await response.json();

    return result;

  } catch (error) {
    console.error(
      "Application submission error:",
      error
    );

    return {
      success: false,
      message:
        "Unable to connect to the application server.",
    };
  }
}