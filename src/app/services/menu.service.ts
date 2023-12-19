// menu.service.ts
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../models/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${environment.apiUrl}/products`);
  }
}
