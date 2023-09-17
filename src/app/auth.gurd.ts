import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
    if (isAuthenticated) {
      this.router.navigate(['/home']);
      return true;
    } else{
        this.router.navigate(['/login'])
     return false;
    }
   
  }
}