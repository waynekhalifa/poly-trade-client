export interface LoginFormValues {
	username: string;
	password: string;
}

export interface RegisterFormValues {
	first_name: string;
	last_name: string;
	username: string;
	email: string;
	password1: string;
	password2: string;
}

export interface ResetPasswordFormValues {
	email: string;
	otp: string;
	new_password: string;
}

export interface VerifyFormValues {
	otp: string;
}

export type TSubmitHandler = LoginFormValues | RegisterFormValues | ResetPasswordFormValues | VerifyFormValues;
