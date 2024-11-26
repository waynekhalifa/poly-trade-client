export interface IDomain {
	id: number;
	domain_name: string;
	backend_url: string;
	website_description: WebsiteDescription[];
	theme: Theme;
	website_name: string;
	website_logo: string;
	header_logo: string;
	footer_logo: string;
	website_favicon: string;
	category: null;
	palette_primary: string;
	palette_secondary: string;
	background_paper: string;
	background_default: string;
	text_primary: string;
	text_secondary: string;
	font_family: null;
}

export interface Theme {
	id: number;
	name: string;
	main_image: string;
	preview_link: string;
	description: string;
	theme_type: string;
	amount: string;
	date_created: string;
	last_updated: string;
	category: number;
	subcategory: number;
}

export interface WebsiteDescription {
	id: number;
	is_ltr: boolean;
	text: string;
	lang: string;
	lang_type_display: string;
}
