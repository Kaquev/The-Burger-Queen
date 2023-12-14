import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInterface } from '../models/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginDataService {
  private apiUrl =
    'https://virtserver.swaggerhub.com/ssinuco/BurgerQueenAPI/2.0.0/login';
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginInterface> {
    const body = { email, password };
    return this.http.post<LoginInterface>(this.apiUrl, body);
  }
}
