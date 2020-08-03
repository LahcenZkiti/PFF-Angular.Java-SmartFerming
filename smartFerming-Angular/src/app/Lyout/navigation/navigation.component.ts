import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

const ADMIN = 'ADMIN';
const EXPERT = 'EXPERT';
const AGRICULTURE = 'AGRICULTURE';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public isMenuCollapsed = true;

  private roles: string[]; 
  isLoggedIn = false;
  showAdminBoard = false;
  showExpertBoard = false;
  showAgricultureBoard = false;
  username: string;
  loggedInUser:any;

  constructor(private router:Router,
              private tokenStorageService:TokenStorageService,
              private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    this.authService.getLoggedInUser.subscribe((user:User)=> {
      this.updateNavBar(user);
    });

    if(this.isLoggedIn){
      const user = this.tokenStorageService.getUser();
      const userType = this.tokenStorageService.getUserType();

      this.roles = user.roles;

      this.showExpertBoard = userType == EXPERT;
      this.showAgricultureBoard = userType == AGRICULTURE;
      this.showAdminBoard = userType == ADMIN;

      this.username = user.username;
    }
  }

  onLogout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']).then(()=> {
      window.location.reload();
    });
  }

  updateNavBar(user:User) {
    console.log("LoggerInUser ", user);
      this.isLoggedIn = true;
      this.loggedInUser = user;
      console.log("Logged in user : ", this.loggedInUser);
      this.showExpertBoard = user.userType == EXPERT;
      console.log("showExpertBoard");
      console.log(this.showExpertBoard);
      this.showAgricultureBoard = user.userType == AGRICULTURE;
      console.log("showAgricultureBoard");
      console.log(this.showAgricultureBoard);
      this.showAdminBoard = user.userType == ADMIN;
      console.log("showAdminBoard");
      console.log(this.showAdminBoard);
  }
}
