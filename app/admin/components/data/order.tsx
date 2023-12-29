// types/order.ts
export type Customer = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

export type Order = {
  code: string;
  customer: Customer;
  items: OrderItem[];
  total: number;
};

export type OrderItem = {
  name: string;
  price: number;
  quantity: number;
  office1: string;
  office2: string;
};