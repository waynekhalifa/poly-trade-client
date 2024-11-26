import { fetchAPI } from "./fetch-api";

export async function getPropertyById(id: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;

  const path = `/properties/${id}`;
  const urlParamsObject = {
    populate: ["gallery", "agent", "fav_users", "contacted_users"],
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };

  return await fetchAPI(path, urlParamsObject, options);
}
