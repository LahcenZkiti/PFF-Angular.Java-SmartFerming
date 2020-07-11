import { Injectable, Output, EventEmitter} from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const AUTH_API = 'http://localhost:8080/api/auth/';
const AGRICULTURE_API = AUTH_API + '/agriculture/';
const EXPERT_API = AUTH_API + '/expert/';
const ADMIN_API = AUTH_API + '/admin/';
const AUTH_user = AUTH_API + '/user'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  @Output() getLoggedInUser: EventEmitter<User> = new EventEmitter();

  constructor(private http:HttpClient) { }

  login(credentials, api:string): Observable<User> {
    console.log("username: " + credentials.username + " password: " + credentials.password );
    return this.http.post<User>(api + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user, api:string):Observable<any> {
    return this.http.post(api + 'signup', {
      firstname:user.firstname,
      lastname:user.lastname,
      email: user.email,
      username: user.username,
      password: user.password
    }, httpOptions);
  }

  agricultureLogin(credentials): Observable<User> {
    return this.login(credentials, AGRICULTURE_API);
  }

  agricultureRegister(user): Observable<any>{
    return this.register(user, AGRICULTURE_API);
  }

  expertLogin(credentials): Observable<User> {
    return this.login(credentials, EXPERT_API);
  }

  expertRegister(user): Observable<any> {
    return this.register(user, EXPERT_API);
  }

  adminLogin(credentials) :Observable<User> {
    return this.login(credentials, ADMIN_API);
  }

  adminRegister(user) :Observable<any> {
    return this.register(user, ADMIN_API);
  }

  getCurrentUser() :Observable<User> {
    return this.http.get<User>(AUTH_user);
  }
}
