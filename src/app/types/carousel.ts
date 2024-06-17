import { IText } from './text';

export interface ICarousel {
	id: number;
	banner_set: ICarouselBannerSet[];
	slug: string;
	page: number;
	created_at: string;
}

export interface ICarouselBannerSet {
	id: number;
	title: IText[];
	sub_title: IText[];
	content: IText[];
	button_text: IText[];
	thumbnail: string;
	product_image: string;
	redirect_url: string;
	deadline: string;
	color: string;
	carousel: number;
}
