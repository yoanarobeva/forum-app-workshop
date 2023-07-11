import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Post } from 'src/app/types';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  isLiked: boolean = false;
  @Input('post') post!: Post;

  constructor(private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLogged;
  }

  like() {
    this.isLiked = !this.isLiked;
    //TODO: add likes to DB
  }
}
