import { IPostParams } from "../types/api";
import { getStrapiURL } from "../utils/api-helpers";

export async function post(params: IPostParams): Promise<any> {
  const { path, input, token } = params;
  const res = await fetch(getStrapiURL() + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        token || process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN
      }`,
    },
    body: JSON.stringify(input),
  });

  const data = await res.json();

  if (data?.error) throw data?.error;

  return data;
}
