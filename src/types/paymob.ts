export interface PaymobCreateInput {
  backend_url: string;
  token: string;
  order: number;
  profile: number;
}

export interface IPaymentPaymob {
  url: string;
}
