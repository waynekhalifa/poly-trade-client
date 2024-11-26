export interface UserUpdateInput {
	token: string;
	backend_url: string;
	id: number;
	first_name?: string;
	last_name?: string;
	username?: string;
	email?: string;
}

export interface UserPartialUpdateInput {
	first_name?: string;
	last_name?: string;
	username?: string;
	email?: string;
}
