import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-register',
  templateUrl: './nav-register.component.html',
  styleUrls: ['./nav-register.component.css']
})
export class NavRegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.router.navigateByUrl('/register');
  }
}
