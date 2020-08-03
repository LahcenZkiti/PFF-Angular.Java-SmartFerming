import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpertAuthGuardService {

  constructor(private route:Router, private authStorage:TokenStorageService,private toastr: ToastrService) { }

  canActivate(next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
      if((this.authStorage.getUser()== null) || (this.authStorage.getUserType() !== 'EXPERT')){
      this.route.navigate(["login"],{queryParams:{retUrl:state.url}});
      this.toastr.error("Vous devez être connecté");
      return false;
      }else{
      return true;
      }
  }
}
