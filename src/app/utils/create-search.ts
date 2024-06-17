import { getStrapiURL } from "./api-helpers";

export async function createSearch(createInput: any) {
  const res = await fetch(getStrapiURL() + "/api/searches", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN}`,
    },
    body: JSON.stringify({ data: createInput }),
  });

  const data = await res.json();

  if (data?.error) throw data?.error;
}
