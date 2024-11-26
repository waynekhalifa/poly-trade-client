import { IUser } from './user';

export interface IReview {
	id: number;
	user: IUser;
	rate: number;
	comment: string;
	likes: number[];
	product: number;
	created_at: string;
}

export interface IReviewCreateInput {
	rate: number;
	name: string;
	email: string;
	review: string;
	save: boolean;
	/**
	 * Product ID
	 * User Details
	 */
}
