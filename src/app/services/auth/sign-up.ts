import { getStrapiURL } from "@/app/utils/api-helpers";
import { IRegisterInput, IRegisterResult } from "@/app/types/auth";

export const signUp = async (
  input: IRegisterInput
): Promise<IRegisterResult> => {
  try {
    const res = await fetch(getStrapiURL() + "/api/auth/local/register", {
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
