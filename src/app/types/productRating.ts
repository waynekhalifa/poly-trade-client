export interface ProductRatingCreateInput {
  backend_url: string;
  token: string;
  // email: string;
  // name: string;
  likes: number[];
  rate: number;
  comment: string;
  product: number;
}

export interface ProductRatingFormValues {
  backend_url?: string;
  token?: string;
  product?: number;
  email: string;
  name: string;
  review: string;
  rating: string;
  terms: boolean;
}
