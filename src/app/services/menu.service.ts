// menu.service.ts
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MenuItem } from '../models/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getMenu(): Observable<MenuItem[]> {
    const dataUserString = sessionStorage.getItem('dataUser');
    const authToken = dataUserString
      ? JSON.parse(dataUserString).accessToken
      : null;

    // Crea un objeto HttpHeaders y agrega la cabecera de autorización
    const headers = new HttpHeaders({
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json', // Puedes agregar otras cabeceras si es necesario
    });
    return this.http.get<MenuItem[]>(`${environment.apiUrl}/products`, {
      headers: headers,
    });
  }
}
