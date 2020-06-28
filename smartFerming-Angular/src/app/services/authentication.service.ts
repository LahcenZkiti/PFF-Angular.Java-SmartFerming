import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private users = [
    {username:'admin', password:'1234', roles:['ADMIN', 'USER', 'EXPERT']},
    {username:'expert', password:'1234', roles:['EXPERT']},
    {username:'user', password:'1234', roles:['USER']}
  ];

  public isAuthenticated: boolean
  public userAuthenticated;
  public token;

  constructor() { }

  public login(username:string, password:string){
    let user;
    this.users.forEach(u => {
      if(u.username == username && u.password == password){
        user = u;
        this.token = {username:u.username, roles:u.roles};
      }
    });

    if(user){
      this.isAuthenticated = true;
      this.userAuthenticated = user;
    }
    else{
      this.isAuthenticated = false;
      this.userAuthenticated = undefined;
    }
  }

  public saveAuthenicatedUser(){
    if(this.userAuthenticated){
      localStorage.setItem('authToken',btoa(JSON.stringify(this.token)));
    }
  }

  public loadAutenticatedUserFromLocalStorage() {
    let t = localStorage.getItem('authToken');
    if(t){
      let user = JSON.parse(atob(t));

      this.userAuthenticated = {username:user.username, roles: user.roles};

      this.isAuthenticated = true;
      this.token = t ;
    }
  }


}
