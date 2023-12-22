// order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order.inteface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl = `${environment.apiUrl}/orders`;

  constructor(private http: HttpClient) {}

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  getOrderById(orderId: string) {
    return this.http.get(`${this.baseUrl}/${orderId}`);
  }

  createOrder(order: any) {
    return this.http.post(`${this.baseUrl}`, order);
  }

  updateOrder(orderId: string, updates: any) {
    return this.http.patch(`${this.baseUrl}/${orderId}`, updates);
  }

  deleteOrder(orderId: string) {
    return this.http.delete(`${this.baseUrl}/${orderId}`);
  }
}
