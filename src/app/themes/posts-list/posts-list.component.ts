import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe({
      next: (posts) => {
        this.posts = posts;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error: ', err);
      }
    });
  }
}
