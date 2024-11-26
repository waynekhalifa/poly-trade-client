import { fetchAPI } from "./fetch-api";

export async function getServiceBySlug(slug: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/services`;
  const urlParamsObject = {
    filters: { slug },
    populate: ["blocks", "seo", "thumbnail", "categories", "author"],
    locale: lang,
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };

  return await fetchAPI(path, urlParamsObject, options);
}
