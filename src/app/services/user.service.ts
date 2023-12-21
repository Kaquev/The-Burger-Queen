// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = `${environment.apiUrl}/users`;

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.baseUrl}`);
  }

  getUserById(userId: string) {
    return this.http.get(`${this.baseUrl}/${userId}`);
  }

  createUser(user: any) {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(userId: string, updates: any) {
    return this.http.patch(`${this.baseUrl}/${userId}`, updates);
  }

  deleteUser(userId: string) {
    return this.http.delete(`${this.baseUrl}/${userId}`);
  }
}
