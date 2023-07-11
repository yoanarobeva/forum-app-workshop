import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api.service';
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

  constructor(private authService: AuthService, private apiService: ApiService) {}

  get isLoggedIn(): boolean {
    return this.authService.isLogged;
  }

  like(postId: string) {
    this.isLiked = !this.isLiked;
    //TODO: add likes to DB
    // this.apiService.likeThemePost(postId);
  }
}
