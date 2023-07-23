import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  public user$ = this.user$$.asObservable()

  user: User | undefined;
  USER_KEY = '[user]'

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription!: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user;
    })
  }

  register(username: string, email: string, password: string, rePassword: string, tel: string) {
    return this.http
      .post<User>('/api/register', {username, email, password, rePassword, tel})
      .pipe(tap((user) => this.user$$.next(user)));
  }

  login(email: string, password: string) {    
    return this.http
      .post<User>('/api/login', {email, password})
      .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http
    .post<User>('/api/logout', {})
    .pipe(tap(() => this.user$$.next(undefined)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
