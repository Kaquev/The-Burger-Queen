import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInterface } from '../models/login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginInterface> {
    const body = {
      email: email,
      password: password,
    };
    return this.http.post<LoginInterface>(this.apiUrl + '/login', body);
  }
}
