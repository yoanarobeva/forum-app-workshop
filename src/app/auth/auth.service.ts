import { Injectable } from '@angular/core';
import { User } from '../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user: User | undefined;
  USER_KEY = '[user]'

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    try {
      const isUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(isUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  register(username: string, email: string, tel: string, password: string, rePassword: string) {
    return this.http.post('/api/register', {username, email, tel, password, rePassword});
  }

  login(email: string, password: string) {
    // this.user = {
    //   email: 'john.doe@gmail.com',
    //   firstName: 'John',
    // };

    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    
    return this.http.post('/api/login', {email, password})
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
