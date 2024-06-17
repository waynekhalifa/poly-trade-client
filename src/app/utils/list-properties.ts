import { fetchAPI } from "./fetch-api";

export async function listProperties(
  featured: boolean | null,
  limit: number,
  searchParams: any,
  filterParams: any = {}
): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/properties`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const sort: any = { createdAt: "desc" };
  const filters: any = { ...filterParams };

  if (searchParams["username"] !== "")
    filters["fav_users"] = { username: searchParams["username"] };
  if (searchParams["agent"] !== "")
    filters["agent"] = { username: searchParams["agent"] };
  if (searchParams["property-purpose"] !== "my-account")
    filters["purpose"] = searchParams["property-purpose"];
  if (searchParams["search"] !== "")
    filters["address"] = searchParams["search"];
  if (searchParams["property-type"] !== "-1")
    filters["type"] = searchParams["property-type"];
  if (searchParams["bedrooms"] !== "-1")
    filters["bed"] = searchParams["bedrooms"];
  if (searchParams["bathrooms"] !== "-1")
    filters["bath"] = searchParams["bathrooms"];
  if (featured !== null) filters["featured"] = featured;

  const urlParamsObject = {
    sort,
    filters,
    populate: ["gallery", "agent", "fav_users", "contacted_users"],
    pagination: {
      start: 0,
      limit,
    },
  };

  return await fetchAPI(path, urlParamsObject, options);
}
