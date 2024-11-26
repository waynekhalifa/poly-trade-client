import { IText } from './text';

export interface IMenu {
	id: number;
	names: IText[];
	menu_item_set: IMenuItemSet[];
	display_location: string;
}

export interface IMenuItemSet {
	id: number;
	labels: IText[];
	created_at: string;
	path: string;
	is_custom: boolean;
	menu: number;
	parent_item: null;
	page: number;
	category: null;
}
