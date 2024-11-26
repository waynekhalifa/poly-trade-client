import {
  pagesPopulates,
  postsPopulates,
  productsPopulates,
  projectsPopulates,
  sectionsPopulates,
  servicesPopulates,
} from "../constants/populates";
import { Locales } from "../enums/locales";
import { Resources } from "../enums/resources";
import { Routes } from "../enums/routes";

import { SortOrders } from "../enums/sort-orders";
import { IListingParams, IPagination } from "../types/api";

export const getSectionsParamsBySlug = (
  slug: string,
  limit: number,
  lang: "en" | "ar" = Locales.ENGLISH
): IListingParams => {
  const params: IListingParams = {
    path: Routes.ROOT + Resources.SECTIONS,
    sort: { precedence: SortOrders.ASC },
    filters: { slug },
    populate: sectionsPopulates,
    pagination: { start: 0, limit },
    locale: lang,
  };

  return params;
};

export const getPagesParamsBySlug = (
  slug: string,
  lang: "en" | "ar" = Locales.ENGLISH
): IListingParams => {
  const params: IListingParams = {
    path: Routes.ROOT + Resources.PAGES,
    sort: { createdAt: SortOrders.ASC },
    filters: { slug },
    populate: pagesPopulates,
    pagination: { start: 0, limit: 1 },
    locale: lang,
  };

  return params;
};

export const getProductsParams = (
  filters: any,
  pagination: IPagination,
  lang: "en" | "ar" = Locales.ENGLISH
): IListingParams => {
  const params: IListingParams = {
    path: Routes.ROOT + Resources.PRODUCTS,
    sort: { createdAt: SortOrders.DESC },
    populate: productsPopulates,
    locale: lang,
    filters,
    pagination,
  };

  return params;
};

export const getProjectsParams = (
  filters: any,
  pagination: IPagination,
  lang: "en" | "ar" = Locales.ENGLISH
): IListingParams => {
  const params: IListingParams = {
    path: Routes.ROOT + Resources.PROJECTS,
    sort: { createdAt: SortOrders.DESC },
    populate: projectsPopulates,
    locale: lang,
    filters,
    pagination,
  };

  return params;
};

export const getServicesParams = (
  filters: any,
  pagination: IPagination,
  lang: "en" | "ar" = Locales.ENGLISH
): IListingParams => {
  const params: IListingParams = {
    path: Routes.ROOT + Resources.SERVICES,
    sort: { createdAt: SortOrders.ASC },
    populate: servicesPopulates,
    locale: lang,
    filters,
    pagination,
  };

  return params;
};

export const getPostsParams = (
  filters: any,
  pagination: IPagination,
  lang: "en" | "ar" = Locales.ENGLISH
): IListingParams => {
  const params: IListingParams = {
    path: Routes.ROOT + Resources.POSTS,
    sort: { createdAt: SortOrders.ASC },
    locale: lang,
    populate: postsPopulates,
    filters,
    pagination,
  };

  return params;
};

export const getCategoriesTagsParams = (
  resource: string,
  lang: "en" | "ar" = Locales.ENGLISH
): IListingParams => {
  const params: IListingParams = {
    path: Routes.ROOT + resource,
    sort: { createdAt: SortOrders.DESC },
    filters: {},
    populate: {},
    pagination: { start: 0, limit: 100 },
    locale: lang,
  };

  return params;
};
