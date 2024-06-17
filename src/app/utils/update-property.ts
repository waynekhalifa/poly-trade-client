import { getStrapiURL } from "./api-helpers";

export async function updateProperty(
  id: number,
  updateInput: any
): Promise<any> {
  const res = await fetch(getStrapiURL() + "/api/properties/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN}`,
    },
    body: JSON.stringify({ data: updateInput }),
  });

  const data = await res.json();

  if (data?.error) throw data?.error;

  return data;
}
