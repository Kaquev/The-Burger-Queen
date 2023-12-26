// login.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInterface } from '../models/login.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = `${environment.apiUrl}/login`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginInterface> {
    const body = {
      email: email,
      password: password,
    };

    return this.http.post<LoginInterface>(`${environment.apiUrl}/login`, body);
  }

  getUserData(): LoginInterface | null {
    const userData = sessionStorage.getItem('dataUser');
    return userData ? JSON.parse(userData) : null;
  }

  getUserRole(): string | null {
    const userData = this.getUserData();
    return userData ? userData.user.role : null;
  }
  isAdmin() {
    return true;
  }
}
