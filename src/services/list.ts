import { IListingParams, IListingResult } from "@/types/api";
import { fetchAPI } from "@/utils/fetch-api";

export async function list(params: IListingParams): Promise<IListingResult> {
  const { path, sort, filters, populate, pagination, locale } = params;
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const options = { headers: { Authorization: `Bearer ${token}` } };
  const urlParamsObject = { sort, filters, populate, pagination, locale };

  return await fetchAPI(path, urlParamsObject, options);
}
