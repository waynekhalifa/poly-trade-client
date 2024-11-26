import { IPostParams } from "../types/api";
import { getStrapiURL } from "../utils/api-helpers";

export async function postForm(params: IPostParams): Promise<any> {
  const { path, input, token } = params;
  const res = await fetch(getStrapiURL() + path, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${
        token || process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN
      }`,
    },
    body: input,
  });

  const data = await res.json();

  if (data?.error) throw data?.error;

  return data;
}
