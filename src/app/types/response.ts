import { ICurrency } from './currency';
import { ICategory } from './new-category';
import { IProduct } from './new-product';

export interface IResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: IProduct[] | ICategory[] | ICurrency[] | any[];
}
