import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginInterface } from './models/login.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Verifica si la solicitud es para el endpoint de inicio de sesión
    if (req.url.includes('/login')) {
      // Si es una solicitud de inicio de sesión, no agregar el encabezado de autorización
      return next.handle(req);
    }

    // Clone la solicitud y establezca el nuevo encabezado en un solo paso.
    const token = this.getUserData()?.accessToken;
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    // Envíe la solicitud recién creada
    return next.handle(authReq);
  }

  getUserData(): LoginInterface {
    const userData = sessionStorage.getItem('dataUser');
    return userData ? JSON.parse(userData) : null;
  }
}
