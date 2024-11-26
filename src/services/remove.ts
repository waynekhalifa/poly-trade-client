import { IRemoveParams } from "../types/api";
import { getStrapiURL } from "../utils/api-helpers";

export async function remove(params: IRemoveParams): Promise<any> {
  const { path, token } = params;
  const res = await fetch(getStrapiURL() + path, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        token || process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN
      }`,
    },
  });

  const data = await res.json();

  if (data?.error) throw data?.error;

  return data;
}
