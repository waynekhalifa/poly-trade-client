import { getStrapiURL } from "@/app/utils/api-helpers";
import { IForgotInput, IForgotResult } from "@/app/types/auth";

export const forgotPassword = async (
  input: IForgotInput
): Promise<IForgotResult> => {
  try {
    const res = await fetch(getStrapiURL() + "/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    const data = await res.json();

    if (data?.error) throw data?.error;

    return data;
  } catch (err: Error | any) {
    throw err;
  }
};
