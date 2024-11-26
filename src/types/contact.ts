export interface IContactMessage {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	subject: string;
	message: string;
	created_at: string;
}

export interface IContactCreateInput {
	first_name: string;
	last_name: string;
	subject: string;
	email: string;
	message: string;
}
