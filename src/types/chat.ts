export interface IChat {
  id: number;
  created_at: string;
  message: string;
  message_status: number;
  receiver: number;
}

export interface IChatCreateInput {
  message: string;
  receiver: number;
}
