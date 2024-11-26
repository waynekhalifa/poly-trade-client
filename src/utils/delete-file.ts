import { getStrapiURL } from "./api-helpers";

export const deleteFile = async (id: string | number): Promise<any> => {
  const response = await fetch(getStrapiURL() + "/api/upload/files/" + id, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN}`,
    },
  });

  return await response.json();
};
