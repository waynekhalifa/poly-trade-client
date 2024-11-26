import { fetchAPI } from "./fetch-api";

export async function getFeaturedProducts(lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/products`;
  const urlParamsObject = {
    filters: { featured: true },
    populate: ["seo", "thumbnail", "gallery"],
    locale: lang,
  };
  const options = { headers: { Authorization: `Bearer ${token}` } };

  return await fetchAPI(path, urlParamsObject, options);
}
