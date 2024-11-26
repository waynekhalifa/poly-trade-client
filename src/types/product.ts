import { IText } from './text';

// Main Product
export interface IProduct {
	id: number;
	description: IText[];
	created_at: string;
	category: number[];
	stock: number;
	name: IText[];
	rate: number;
	slug: string;
	display_image: string;
	price: number;
	is_best_seller: boolean;
	discount: number;
}

// Product Variants
export interface IProductVariant {
	id: number;
	variant_attribute_set: IProductVariantSKU[];
	images_set: IProductVariantImages[];
	product: number;
	discount: number;
	price: number;
	quantity: number;
	slug: string;
	has_orders: boolean;
}

export interface IProductVariantImages {
	id: number;
	image: string;
	product_variant: number;
}

// export interface IProductVariantSKU {
// 	id: number;
// 	attribute_value: string;
// 	attribute: number;
// 	attribute_name: string;
// 	product_variant_id: number;
// 	extra_data: any;
// }

export interface IProductVariantSKU {
	name: string;
	attribute_value_set: IProductVariantSKUValueSet[];
}

export interface IProductVariantSKUValueSet {
	value: string;
	extra_data: ExtraData;
}

export interface ExtraData {
	color_label: string;
	color_code: string;
	is_color: boolean;
}

// Product Banner
export interface IProductBanner {
	id: number;
	content: IText[];
	slug: string;
	product: number;
	page: number;
	thumbnail?: string;
	product_slug: string;
	created_at?: string;
}

// Product Rating
export interface IProductRating {
	id: number;
	rate: number;
	created_at: string;
	comment: string;
	product: number;
	likes: any[];
	user: IProductRatingUser;
}

export interface IProductRatingUser {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
}

export interface IProductRatingCreateInput {
	rate: number;
	comment: string;
	product: number;
	likes?: number[];
}

// Product Reply
export interface IRatingReply {
	id: number;
	created_at: string;
	comment: string;
	parent_comment: number;
	parent_reply?: number;
	likes: number[];
}

export interface IRatingReplyCreateInput {
	comment: string;
	parent_comment: number;
	parent_reply?: number;
}

export interface IRatingReplyUpdateInput {
	id: number;
	comment?: string;
	parent_comment?: number;
	parent_reply?: number;
}

// Product Liking
export interface IProductLikingCreateInput {
	model: 'product_reply' | 'product_rate' | 'vender_rate';
	id: number;
	action: 'add' | 'remove';
}

// Wishlist Product
export interface IProductWish {
	id: number;
	product: IProduct;
	created_at: string;
	user: IProductRatingUser;
}

export interface IProductWishCreateInput {
	product: number;
}

export interface IProductCartCreateInput {
	product: number;
}

// Cart Product
export interface IProductCart {
	id: number;
	product: IProduct;
	created_at: string;
	product_names: IText[];
}
