import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="post-container">
    <h2>All Posts</h2>
    <div *ngFor="let post of posts" class="post-card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>
  </div>
  `,
  styles: [`
    .post-container { width: 600px; margin: auto; }
    .post-card {
      border: 1px solid #ddd; padding: 15px; margin: 10px 0;
      border-radius: 10px; background: #f9f9f9;
    }
  `]
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getAllPosts().subscribe(data => this.posts = data);
  }
}
