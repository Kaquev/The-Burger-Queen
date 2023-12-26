export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
}
export interface OrderProduct {
  qty: number;
  product: Product;
}

export interface Order {
  id: number;
  userId: number;
  client: string;
  products: OrderProduct[];
  status: string;
  dateEntry: string;
  dateProcessed?: string;
}

export interface OrderListResponse {
  listaOrdenes: Order[];
}
