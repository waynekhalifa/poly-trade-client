export interface IPayMobCreateInput {
  order: number;
  profile: number;
}

export interface IStripeCreateInput {
  order: number;
  gateway: string;
}
