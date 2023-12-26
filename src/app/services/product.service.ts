// product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../models/order.inteface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(productId: string) {
    return this.http.get(`${this.baseUrl}/${productId}`);
  }

  createProduct(product: any) {
    return this.http.post(`${this.baseUrl}`, product);
  }

  updateProduct(productId: string, updates: any) {
    return this.http.patch(`${this.baseUrl}/${productId}`, updates);
  }

  deleteProduct(productId: string) {
    return this.http.delete(`${this.baseUrl}/${productId}`);
  }
}
