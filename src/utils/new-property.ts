import { getStrapiURL } from "./api-helpers";

const newProperty = async (createInput: any): Promise<any> => {
  const res = await fetch(getStrapiURL() + "/api/properties", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN}`,
    },
    body: JSON.stringify({ data: createInput }),
  });

  const data = await res.json();

  if (data?.error) throw data?.error;

  return data;
};

export default newProperty;
