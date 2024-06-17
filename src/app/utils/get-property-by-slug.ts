import { fetchAPI } from "./fetch-api";

export async function getPropertyBySlug(slug: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/properties`;
  const urlParamsObject = {
    filters: { slug },
    populate: ["gallery", "seo", "seo.icon", "agent"],
    locale: lang,
  };

  const options = { headers: { Authorization: `Bearer ${token}` } };
  return await fetchAPI(path, urlParamsObject, options);
}
