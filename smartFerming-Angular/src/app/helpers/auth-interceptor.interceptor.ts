import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

const TOKEN_HEADER_KEY = 'Authorization'; 
const USER_TYPE_HEADER_KEY = 'User-type';
@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let authReq = req;
    const token = this.token.getToken();
    const userType = this.token.getUserType();
    let headers = req.headers;
    if (token != null) {
      headers = headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token);
    }
    
    if (userType != null) {
      console.log("userType", userType);
      headers = headers.set(USER_TYPE_HEADER_KEY, userType);
    }
    authReq = req.clone({headers: headers});
    return next.handle(authReq);
  
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true }
];
