export interface ISort {
  createdAt: "asc" | "desc";
}

export interface IPagination {
  start: number;
  limit: number;
}

export interface IListingParams {
  path: string;
  sort: any;
  filters: any;
  populate: any;
  pagination: IPagination;
  locale: "en" | "ar";
}

export interface IListingResult {
  data: Model[];
  meta: Meta;
}

export interface Model {
  id: number;
  attributes: any;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IListingItem {
  name: string;
  result: IListingResult;
}

export interface IPostParams {
  path: string;
  input: any;
  token?: string;
}

export interface IRemoveParams {
  path: string;
  token?: string;
}
