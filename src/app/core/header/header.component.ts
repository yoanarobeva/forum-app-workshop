import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthService, private router: Router) {}
  
  get isLoggedIn(): boolean {
    return this.authService.isLogged;
  }

  get username(): string {
    return this.authService.user?.username || '';
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/auth/login'])
      },
      error: (err) => {
        this.router.navigate(['/auth/login'])
      },
    });
  }
}
