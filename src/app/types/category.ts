export type CategoriesResponse = {
  count: number;
  next: string;
  previous: string;
  results: Category[];
};

export type CategorySet = {
  id: number;
  name: string;
  description: string;
  base_category: number | null;
  slug: string | null;
  thumbnail: string | null;
};

export type Category = {
  id: number;
  name: string;
  description: string;
  category_set: CategorySet[];
  base_category: number | null;
  slug: string | null;
  thumbnail: string | null;
};

export interface ICategory {
  id: number;
  names: IDescription[];
  descriptions: IDescription[];
  sub_categories: any[];
  base_category: null;
  slug: string;
  thumbnail: null;
  created_at: string;
  icon: null;
}

export interface IDescription {
  id: number;
  is_ltr: boolean;
  text: string;
  lang: string;
  lang_type_display: string;
}

export interface ICategoryBanner {
  id: number;
  content: IContent[];
  created_at: string;
  thumbnail: null;
  slug: string;
  category: number;
  page: number;
}

export interface IContent {
  id: number;
  is_ltr: boolean;
  text: string;
  lang: string;
  lang_type_display: string;
}

export interface ICategoryBannerCreateInput {
  content: ICategoryBannerContent[];
  slug: string;
  category: number;
  page: number;
}

export interface ICategoryBannerContent {
  is_ltr: boolean;
  text: string;
  lang: string;
}

export interface ICategoryCreateInput {
  names: IDescription[];
  descriptions: IDescription[];
  base_category: number;
  slug: string;
}

export interface IDescription {
  is_ltr: boolean;
  text: string;
  lang: string;
}

export interface ICategoryUpdateInput {
  id: number;
  names?: IDescription[];
  descriptions?: IDescription[];
  sub_categories?: any[];
  base_category?: number;
  slug?: string;
  thumbnail?: string;
  created_at?: string;
  icon?: string;
}

export interface ICategoryBannerUpdateInput {
  id: number;
  content?: IContent[];
  created_at?: string;
  thumbnail?: string;
  slug?: string;
  category?: number;
  page?: number;
}
