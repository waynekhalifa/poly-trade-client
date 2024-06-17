import { IText } from './text';

export interface ICartItem {
	id: string | number;
	name: IText[];
	price: number;
	quantity: number;
	stock: number;
	image: string;
}
