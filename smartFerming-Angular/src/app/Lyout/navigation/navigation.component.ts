import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router:Router, private tokenStorageService:TokenStorageService) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.tokenStorageService.signOut();
    this.router.navigateByUrl('/login');
  }
}
