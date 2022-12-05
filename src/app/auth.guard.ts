import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Produits } from './class/produits';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,
    private authService:AuthService){}
  canActivate() {
   console.log('canActivate');
    if(this.authService.connected)
    return true;
    else{
      this.router.navigate(['admin/login']);
      return false;
    }

  }
  
}
