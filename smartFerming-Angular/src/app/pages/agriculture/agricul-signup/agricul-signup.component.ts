import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
              private router:Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.agricultureRegister(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.toastr.success("Your registration is successful!");
        this.router.navigateByUrl('login')
      },
      err => {
        console.log(err)
        this.errorMessage = err.error.message;
        this.toastr.error("Signup failed!");
        this.isSignUpFailed = true;
      }
    )
  }
}
