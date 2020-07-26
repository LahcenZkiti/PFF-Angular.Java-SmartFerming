import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agricul-login',
  templateUrl: './agricul-login.component.html',
  styleUrls: ['./agricul-login.component.css']
})
export class AgriculLoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService:AuthenticationService,
              private tokenStorage: TokenStorageService,
              private router:Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onlogin(){
    this.authService.agricultureLogin(this.form).subscribe(
      (user:User) => {
        console.log(user);
        this.tokenStorage.saveToken(user.accessToken);
        this.tokenStorage.saveUser(user);
        this.tokenStorage.saveUserType(user.userType);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        console.log("login successful");
        this.toastr.success("login successful");
        console.log(this.tokenStorage.getUser());
        this.router.navigate(['detect-auto']);
        this.reloadPage();
      },
      err => {
        console.log(err);
        this.errorMessage = err.error.message;
        this.toastr.error("Login failed");
        this.isLoginFailed = true;
      }
    )
  }

  reloadPage() {
    window.location.reload();
  }
}