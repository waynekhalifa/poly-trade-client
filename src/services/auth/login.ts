import { getStrapiURL } from "@/utils/api-helpers";
import { ILoginInput, ILoginResult } from "@/types/auth";

export const login = async (input: ILoginInput): Promise<ILoginResult> => {
  try {
    const res = await fetch(getStrapiURL() + "/api/auth/local", {
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
