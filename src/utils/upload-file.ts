import { getStrapiURL } from "./api-helpers";

export const uploadFile = async (
  formData: any,
  token: string
): Promise<any> => {
  const response = await fetch(getStrapiURL() + "/api/upload", {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  return await response.json();
};
