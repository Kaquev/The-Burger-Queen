// menu.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menu.interface';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private baseUrl = `${environment.apiUrl}/products`;

  constructor(private http: HttpClient) {}

  getMenu(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.baseUrl);
  }
}
