import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'smartFerming-Angular';

  constructor(private authService:AuthenticationService){}

  ngOnInit() {
    this.authService.loadAutenticatedUserFromLocalStorage();
  }
}
