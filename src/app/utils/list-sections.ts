import { SortOrders } from "../enums/sort-orders";
import { fetchAPI } from "./fetch-api";

export async function listSections(slug: string): Promise<any> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/sections`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    filters: { slug },
    sort: { precedence: SortOrders.ASC },
    populate: [
      "container",
      "container.background",
      "container.background.image",
      "container.background.video",
      "container.background.gradient",
      "container.padding.top",
      "container.padding.bottom",
      "container.padding.left",
      "container.padding.right",
      "container.grid",
      "container.grid.rows",
      "container.grid.rows.height",
      "container.grid.rows.padding.top",
      "container.grid.rows.padding.bottom",
      "container.grid.rows.padding.left",
      "container.grid.rows.padding.right",
      "container.grid.rows.columns",
      "container.grid.rows.columns.height",
      "container.grid.rows.columns.innerHeight",
      "container.grid.rows.columns.bottomMargin",
      "container.grid.rows.columns.span",
      "container.grid.rows.columns.padding.top",
      "container.grid.rows.columns.padding.bottom",
      "container.grid.rows.columns.padding.left",
      "container.grid.rows.columns.padding.right",
      "container.grid.rows.columns.alignment",
      "container.grid.rows.columns.background",
      "container.grid.rows.columns.background.image",
      "container.grid.rows.columns.background.video",
      "container.grid.rows.columns.background.gradient",
      "content",
      "content.animation",
      "content.textAlign",
      "content.margin.top",
      "content.margin.bottom",
      "content.margin.left",
      "content.margin.right",
      "content.padding.top",
      "content.padding.bottom",
      "content.padding.left",
      "content.padding.right",
      "content.alignment",
      "content.columnNum",
      "content.files",
      "content.column",
      "content.file",
      "content.url",
      "content.position",
      "content.icon",
      "content.links",
      "content.grid",
      "content.grid.rows",
      "content.grid.rows.columns",
      "content.grid.rows.columns.alignment",
      "content.grid.rows.columns.background",
      "content.grid.rows.columns.spacing",
      "content.width",
      "content.list",
      "content.list.alignment",
      "content.list.padding",
      "content.list.margin",
      "content.list.position",
      "content.list.text",
      "content.list.text.alignment",
      "content.list.text.padding",
      "content.list.image",
      "content.list.image.file",
      "content.list.image.padding",
      "content.list.image.margin",
      "form",
      "form.section",
      "form.fields",
      "form.fields.options",
    ],
    pagination: {
      start: 0,
      limit: 100,
    },
  };

  return await fetchAPI(path, urlParamsObject, options);
}
