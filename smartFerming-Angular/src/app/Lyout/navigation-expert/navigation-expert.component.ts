import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-expert',
  templateUrl: './navigation-expert.component.html',
  styleUrls: ['./navigation-expert.component.css']
})
export class NavigationExpertComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.router.navigateByUrl('/login');
  }
}
