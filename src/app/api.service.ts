import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getThemes() {
    const { appUrl } = environment;
    return this.http.get(`${appUrl}/themes`);
  }

  getPosts(limit?: number) {
    const { appUrl } = environment;
    return this.http.get(`${appUrl}/posts${limit ? `?limit=${limit}` : ''}`);
  }
}
