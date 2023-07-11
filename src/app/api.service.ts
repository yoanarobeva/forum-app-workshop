import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTheme(themeId: string) {
    const { appUrl } = environment;
    return this.http.get<Theme>(`${appUrl}/themes/${themeId}`)
  }

  subscribeToTheme(themeId: string) {
    const { appUrl } = environment;
    // TODO: check if this is the body of the request!!!
    return this.http.put<Theme>(`${appUrl}/themes/${themeId}`, {'subscribers':  themeId})
  }

  getThemes() {
    const { appUrl } = environment;
    return this.http.get<Theme[]>(`${appUrl}/themes`);
  }

  getPosts(limit?: number) {
    const { appUrl } = environment;
    return this.http.get<Post[]>(`${appUrl}/posts${limit ? `?limit=${limit}` : ''}`);
  }
}
