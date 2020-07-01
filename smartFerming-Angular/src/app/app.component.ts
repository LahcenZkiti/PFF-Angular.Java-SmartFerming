import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'smartFerming-Angular';

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showExpertBoard = false;
  username: string;

  constructor(private tokenStorageService:TokenStorageService){}

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();


    if(this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_AMIN');
      this.showExpertBoard = this.roles.includes('ROLE_EXPERT');

      this.username = user.username;
    }
  }

  logout(){
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
