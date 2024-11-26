import type { ObjectSchema } from 'yup';

export interface ValidationObject {
	defaultValues: {};
	resolver: ObjectSchema<any>;
}
