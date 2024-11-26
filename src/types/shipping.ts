export interface CreateShippingInput {
  backend_url?: string;
  token?: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  address: string;
  address_note: string;
  country: string;
  city: string;
  postal_code: number;
  apartment: string;
  email: string;
  profile_name?: string;
  shipping?: string;
  ship_to_different_address?: boolean;
}
