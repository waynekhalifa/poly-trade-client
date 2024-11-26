export interface IProduct {
	id: number;
	description: IProductText[];
	items: IProductItem[];
	created_at: string;
	category: number;
	stock: number;
	name: IProductText[];
	rate: null;
	slug: string;
}

export interface IProductText {
	id: number;
	is_ltr: boolean;
	text: string;
	lang: string;
	lang_type_display: string;
}

export interface IProductItem {
	id: number;
	sku_set: IProductSKUSet[];
	images_set: IProductImagesSet[];
	product: number;
	discount: number;
	price: number;
	quantity: number;
	slug: string;
	has_orders: boolean;
}

export interface IProductImagesSet {
	id: number;
	image: string;
	product_variant: number;
}

export interface IProductSKUSet {
	id: number;
	attribute_value: string;
	attribute: number;
	attribute_name: string;
	product_variant_id: number;
}

export interface IProductBanner {
	id: number;
	content: IProductBannerContent[];
	slug: string;
	product: number;
	page: number;
	thumbnail?: string;
	product_slug: string;
	created_at?: string;
}

export interface IProductBannerContent {
	id: number;
	is_ltr: boolean;
	text: string;
	lang: string;
	lang_type_display: string;
}
