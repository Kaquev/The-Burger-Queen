export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
}

export interface ProductListResponse {
  listaProductos: Product[];
}
