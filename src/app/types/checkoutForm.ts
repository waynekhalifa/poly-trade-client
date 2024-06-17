export interface CheckoutForm {
  backend_url?: string;
  token?: string;
  phone_number: string;
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  address_note: string;
  country: string;
  city: string;
  postal_code: string;
  apartment: string;
  profile_name?: string;
  shipping?: string;
  payment_method?: string;
  ship_to_different_address?: boolean;
  shipment_address?: boolean;
}
