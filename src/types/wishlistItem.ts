export interface IWishlistItem {
	id: number;
	product: IWishlistItemProduct;
	created_at: string;
	product_names: IWishlistItemProductName[];
}

export interface IWishlistItemProduct {
	id: number;
	sku_set: IWishlistItemSkuSet[];
	images_set: IWishlistItemImagesSet[];
	product: number;
	discount: number;
	price: number;
	quantity: number;
	slug: string;
}

export interface IWishlistItemImagesSet {
	id: number;
	image: string;
	product_variant: number;
}

export interface IWishlistItemSkuSet {
	id: number;
	attribute_value: string;
	attribute: number;
	attribute_name: string;
	product_variant_id: number;
}

export interface IWishlistItemProductName {
	id: number;
	is_ltr: boolean;
	text: string;
	lang: string;
	lang_type_display: string;
}
