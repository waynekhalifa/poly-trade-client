import { getStrapiURL } from "@/utils/api-helpers";
import { ILoginResult, IResetInput } from "@/types/auth";

export const resetPassword = async (
  input: IResetInput
): Promise<ILoginResult> => {
  try {
    const res = await fetch(getStrapiURL() + "/api/auth/reset-password", {
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
