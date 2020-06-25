import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onlogin(dataForm:any){
    console.log("login data  ", JSON.stringify(dataForm))
    this.authService.login(dataForm.username, dataForm.password);
    if(this.authService.isAuthenticated){
      if(this.authService.userAuthenticated){
        if(this.authService.userAuthenticated.roles.indexOf('EXPERT') > -1){
          this.router.navigateByUrl('/espace-expert');
          return true ;
        }
        return false;
      }
      this.router.navigateByUrl('');
      return false;
    }
  }
}