import { fetchAPI } from "./fetch-api";

export async function getCourseBySlug(slug: string, lang: string) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  const path = `/courses`;

  const urlParamsObject = {
    filters: { slug },
    populate: [
      "seo",
      "thumbnail",
      "sections",
      "sections.picture",
      "sections.button",
      "sections.partners",
      "sections.partners.files",
      "sections.modules",
    ],
    locale: lang,
  };

  const options = { headers: { Authorization: `Bearer ${token}` } };

  return await fetchAPI(path, urlParamsObject, options);
}
