import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agricul-signup',
  templateUrl: './agricul-signup.component.html',
  styleUrls: ['./agricul-signup.component.css']
})
export class AgriculSignupComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService:AuthenticationService,
              private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.agricultureRegister(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigateByUrl('login')
      },
      err => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    )
  }
}
