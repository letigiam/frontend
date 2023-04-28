import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _service: AuthService) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkRoleUser(route);
  }

  checkRoleUser(route: any): any {
    //FACCIO CHIAMATA AL BACKEND E VEDO IL RUOLO//
    let role_db = localStorage.getItem('role');
    let role = route.data.role;
    //SE RUOLO UGUALE ALLORA FACCIO TRUE//
    if (role == role_db) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }



}
