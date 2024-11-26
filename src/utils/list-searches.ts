import { fetchAPI } from "./fetch-api";

export async function listSearches(
  limit: number,
  searchParams: any
): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/searches`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const sort: any = { createdAt: "desc" };
  const filters: any = {};

  if (searchParams["username"] !== "")
    filters["users"] = { username: searchParams["username"] };

  const urlParamsObject = {
    sort,
    filters,
    populate: ["users"],
    pagination: { start: 0, limit },
  };

  return await fetchAPI(path, urlParamsObject, options);
}
