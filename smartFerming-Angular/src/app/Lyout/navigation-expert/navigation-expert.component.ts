import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navigation-expert',
  templateUrl: './navigation-expert.component.html',
  styleUrls: ['./navigation-expert.component.css']
})
export class NavigationExpertComponent implements OnInit {

  constructor(private router:Router,
              private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
  }

}
