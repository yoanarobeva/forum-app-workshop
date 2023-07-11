import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Theme } from 'src/app/types';

@Component({
  selector: 'app-theme-card',
  templateUrl: './theme-card.component.html',
  styleUrls: ['./theme-card.component.css']
})

export class ThemeCardComponent {
  isSubscribed: boolean = false;

  @Input('theme') theme!: Theme;

  constructor(private authService: AuthService, private apiService: ApiService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLogged;
  }

  subscribe(themeId: string) {
    this.isSubscribed = !this.isSubscribed;
    //TODO: add subscriber to DB
    // this.apiService.subscribeToTheme(themeId);
  }
}
