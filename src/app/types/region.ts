export interface IRegion {
	id: number;
	names: IRegionName[];
	shipment_price: number;
}

export interface IRegionName {
	id: number;
	is_ltr: boolean;
	text: string;
	lang: string;
	lang_type_display: string;
}
