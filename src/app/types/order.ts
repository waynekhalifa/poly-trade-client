import { IShippingAddress } from './shippingAddress';

export interface OrderItem {
	quantity: number;
	order?: number;
	product_variant: number;
}

export interface OrderCreateInput {
	backend_url: string;
	token: string;
	items: OrderItem[];
	shipment: number;
	order_status: string;
	order_notes?: string;
}

export interface IOrderCreateInput {
	items: IOrderItem[];
	shipment: number;
	order_status: string;
	order_notes: string;
}

export interface IOrderItem {
	quantity: number;
	order?: number;
	product_variant: number;
}

export interface IOrderDashboardCreateInput {
	payment_status: string;
	order_status: string;
	total_price: number;
	order_notes: string;
}

export interface IOrderUpdateInput {
	id: number;
	order_status?: string;
	order_notes?: string;
}

export interface IOrder {
	id: number;
	items: Item[];
	total_price: number;
	payment_status: string;
	shipment: IShippingAddress;
	order_status: string;
	created_at: string;
	order_notes: string;
}

export interface Item {
	id: number;
	quantity: number;
	price: number;
	created_at: string;
	order: number;
	product_variant: ProductVariant;
}

export interface ProductVariant {
	id: number;
	sku_set: SkuSet[];
	images_set: ImagesSet[];
	product: number;
	discount: number;
	price: number;
	quantity: number;
	slug: string;
	has_orders: boolean;
	name: Name[];
}

export interface ImagesSet {
	id: number;
	image: string;
	product_variant: number;
}

export interface Name {
	id: number;
	is_ltr: boolean;
	text: string;
	lang: string;
	lang_type_display: string;
}

export interface SkuSet {
	id: number;
	attribute_value: string;
	attribute: number;
	attribute_name: string;
	product_variant_id: number;
}

export interface IOrderDashboard {
	id: number;
	items: Item[];
	user: User;
	total_price: number;
	payment_status: string;
	shipment: IShippingAddress;
	order_status: string;
	created_at: string;
	order_notes: string;
}

export interface Item {
	id: number;
	quantity: number;
	price: number;
	created_at: string;
	order: number;
	product_variant: ProductVariant;
}

export interface ProductVariant {
	id: number;
	sku_set: SkuSet[];
	images_set: ImagesSet[];
	product: number;
	discount: number;
	price: number;
	quantity: number;
	slug: string;
	has_orders: boolean;
	name: Name[];
}

export interface ImagesSet {
	id: number;
	image: string;
	product_variant: number;
}

export interface Name {
	id: number;
	is_ltr: boolean;
	text: string;
	lang: string;
	lang_type_display: string;
}

export interface SkuSet {
	id: number;
	attribute_value: string;
	attribute: number;
	attribute_name: string;
	product_variant_id: number;
}

export interface User {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
}
