import { fetchAPI } from "./fetch-api";

export async function getUserById(id: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN;

  const path = `/users/${id}`;
  const urlParamsObject = {
    populate: ["role", "properties"],
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };

  return await fetchAPI(path, urlParamsObject, options);
}
