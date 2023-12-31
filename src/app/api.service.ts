import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Theme, Post } from './types';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  constructor(private http: HttpClient) {}
   
  getTheme(themeId: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${themeId}`);
  }

  postTheme(themeName: string, postText: string) {
    return this.http.post<Theme>('/api/themes', {themeName, postText});
  } 

  subscribeToTheme(themeId: string) {
    return this.http.put(`/api/themes/${themeId}`, {});
  }

  likeThemePost(postId: string) {
    return this.http.put(`/api/likes/${postId}`, {});
  }

  getThemes() {
    const { apiUrl } = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getPosts(limit?: number) {
    const { apiUrl } = environment;
    return this.http.get<Post[]>(
      `${apiUrl}/posts${limit ? `?limit=${limit}` : ''}`
    );
  }
}
