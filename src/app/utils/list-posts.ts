import { fetchAPI } from "./fetch-api";

export async function listPosts(): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/posts`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    sort: { createdAt: "desc" },
    populate: {
      thumbnail: { fields: ["url", "width", "height"] },
      categories: { populate: "*" },
      author: {
        populate: "*",
      },
    },
    pagination: {
      start: 0,
      limit: 10,
    },
  };
  return await fetchAPI(path, urlParamsObject, options);
}
