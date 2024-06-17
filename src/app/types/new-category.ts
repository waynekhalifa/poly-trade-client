export interface ICategory {
  id: number;
  names: Description[];
  descriptions: Description[];
  sub_categories: any[];
  base_category: null;
  slug: string;
  thumbnail: null;
  created_at: string;
  icon: null;
}

export interface Description {
  id: number;
  is_ltr: boolean;
  text: string;
  lang: string;
  lang_type_display: string;
}
