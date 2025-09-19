import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-create',
 standalone: true,
  imports: [FormsModule],
  template: `
  <div class="post-create-container">
    <h2>Create Post</h2>
    <form (ngSubmit)="onCreatePost()">
      <input [(ngModel)]="title" name="title" placeholder="Title" required />
      <textarea [(ngModel)]="content" name="content" placeholder="Content" required></textarea>
      <button type="submit">Create</button>
    </form>
  </div>
  `,
  styles: [`
    .post-create-container {
      width: 500px; margin: auto; padding: 20px;
      border: 1px solid #ccc; border-radius: 10px;
      background: #f9f9f9;
    }
    input, textarea {
      width: 100%; padding: 10px; margin: 10px 0;
      border: 1px solid #ddd; border-radius: 5px;
    }
    textarea { min-height: 150px; }
    button {
      padding: 10px 20px; border: none; border-radius: 5px;
      background: #28a745; color: white; cursor: pointer;
    }
    button:hover { background: #218838; }
  `]
})
export class PostCreateComponent {
  title = '';
  content = '';

  constructor(private postService: PostService, private router: Router) {}

  onCreatePost() {
    this.postService.createPost({ title: this.title, content: this.content }).subscribe({
      next: () => {
        alert('Post created successfully!');
        this.router.navigate(['/posts']);
      },
      error: () => alert('Failed to create post')
    });
  }
}
