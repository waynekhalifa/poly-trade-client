import { fetchAPI } from "./fetch-api";

export async function listTags(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/tags`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    sort: { createdAt: "desc" },
    populate: {
      thumbnail: { fields: ["url"] },
    },
    pagination: {
      start: 0,
      limit: 100,
    },
  };

  return await fetchAPI(path, urlParamsObject, options);
}
