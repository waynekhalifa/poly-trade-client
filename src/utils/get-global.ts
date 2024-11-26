import { fetchAPI } from "./fetch-api";

export async function getGlobal(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: [
      "favicon",
      "palette",
      "palette.primary",
      "palette.secondary",
      "palette.common",
      "palette.background",
    ],
    locale: "en",
  };

  return await fetchAPI(path, urlParamsObject, options);
}
