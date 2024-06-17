import { IText } from "./text";

export interface IBlogPost {
	id: number;
	title: IText[];
	body: IText[];
	created_at: string;
	thumbnail: string;
	slug: string;
}

export interface IPostCreateInput {
	thumbnail: string;
	title: IText[];
	body: IText[];
}

export interface IPostUpdateInput {
	id: number;
	thumbnail?: string;
	title?: IText[];
	body?: IText[];
}

export interface IBlogSubscribeCreateInput {
	email: string;
}
