export interface IGatewayPaymobCreateInput {
  is_active: boolean;
  iframe_id: number;
  integration_id: number;
  api_key: string;
  hmac_secret: string;
  currency: string;
}
