import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Theme } from 'src/app/types';

@Component({
  selector: 'app-theme-card',
  templateUrl: './theme-card.component.html',
  styleUrls: ['./theme-card.component.css']
})

export class ThemeCardComponent implements OnChanges{
  isSubscribed: boolean = false;

  @Input('theme') theme!: Theme;

  constructor(private authService: AuthService, private apiService: ApiService) { 
    
  }

  get isLoggedIn(): boolean {
    return this.authService.isLogged;
  }
  
  
  subscribe(themeId: string) {
    
    this.apiService.subscribeToTheme(themeId).subscribe(() => {
      if(!this.isSubscribed) {
        this.theme.subscribers.length++;
      }
      this.isSubscribed = true;
    });
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    
    if (this.theme.subscribers.includes(this.authService.user!._id)) {
      this.isSubscribed =  true;
    } else {
      this.isSubscribed = false;
    }
  }
}
