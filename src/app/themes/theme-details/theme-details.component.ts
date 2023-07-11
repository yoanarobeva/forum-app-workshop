import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Theme } from 'src/app/types';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.css']
})
export class ThemeDetailsComponent implements OnInit {
  theme: Theme | undefined;
  isLoading: boolean = true;

  constructor(
    private apiService: ApiService, 
    private activatedRoute: ActivatedRoute, 
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['themeId'];

    this.apiService.getTheme(id).subscribe({
      next: (theme) => {
        this.theme = theme;
        this.isLoading = false;        
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error: ', err);
      }
    })
  }

  get isLoggedIn(): boolean {
    return this.authService.isLogged;
  }
}
