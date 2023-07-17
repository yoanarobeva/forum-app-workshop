import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

export class AuthActivate {
  
  constructor(private authService: AuthService) {};
  
  authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    return !!this.authService.isLogged;
  };
}