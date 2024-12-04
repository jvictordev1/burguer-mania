export interface IOrder {
  statusId: number;
  userId: number;
  value: number;
  description: string;
  products: { id: number; amount: number }[];
}
