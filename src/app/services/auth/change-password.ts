import { getStrapiURL } from "@/app/utils/api-helpers";
import { IChangePasswordInput, ILoginResult } from "@/app/types/auth";

export const changePassword = async (
  token: string,
  input: IChangePasswordInput
): Promise<ILoginResult> => {
  try {
    const res = await fetch(getStrapiURL() + "/api/auth/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(input),
    });

    const data = await res.json();

    if (data?.error) throw data?.error;

    return data;
  } catch (err: Error | any) {
    throw err;
  }
};
