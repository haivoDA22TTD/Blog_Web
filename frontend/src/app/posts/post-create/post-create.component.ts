import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'PostCreateComponent',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="PostCreateComponent">
    <h2>Quản lý Bài viết (Admin)</h2>

    <!-- Form tạo bài -->
    <div class="create-form">
      <h3>Tạo bài viết mới</h3>
      <input [(ngModel)]="newPost.title" placeholder="Tiêu đề" />
      <textarea [(ngModel)]="newPost.content" placeholder="Nội dung"></textarea>
      <button (click)="createPost()">Đăng bài</button>
    </div>

    <hr />

    <!-- Danh sách bài -->
    <div *ngFor="let post of posts" class="post-card">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
      <button (click)="deletePost(post.id)">Xóa</button>
    </div>
  </div>
  `,
  styles: [`
    .PostCreateComponent { width: 700px; margin: auto; padding: 20px; }
    .create-form {
      border: 1px solid #ddd; padding: 15px; margin-bottom: 20px;
      border-radius: 10px; background: #f4f4f4;
    }
    input, textarea {
      width: 100%; padding: 8px; margin: 6px 0; border: 1px solid #ccc; border-radius: 5px;
    }
    button {
      padding: 6px 12px; border: none; border-radius: 5px;
      background: #007bff; color: white; cursor: pointer;
    }
    button:hover { background: #0056b3; }
    .post-card {
      border: 1px solid #ccc; border-radius: 10px;
      padding: 15px; margin: 10px 0; background: #fafafa;
    }
    .post-card button {
      background: red;
    }
    .post-card button:hover { background: darkred; }
  `]
})
export class PostCreateComponent {
  posts: any[] = [];
  newPost = { title: '', content: '' };
  token = localStorage.getItem('jwtToken') || '';

  constructor(private postService: PostService, private router: Router) {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getAllPosts().subscribe({
      next: data => this.posts = data,
      error: err => console.error(err)
    });
  }

  createPost() {
    if (!this.newPost.title || !this.newPost.content) {
      alert('Vui lòng nhập đủ tiêu đề và nội dung!');
      return;
    }

    this.postService.createPost(this.newPost, this.token).subscribe({
      next: (post) => {
        this.posts.push(post);
        this.newPost = { title: '', content: '' };
        alert('Đăng bài thành công!');
      },
      error: err => alert('Đăng bài thất bại: ' + err.message)
    });
  }

  deletePost(id: number) {
  if (!this.token) {
    alert('Bạn cần đăng nhập!');
    this.router.navigate(['/login']);
    return;
  }

  try {
    const payload: any = jwtDecode(this.token);
    const roles: string[] = payload.roles || [];

    if (!roles.includes('ROLE_ADMIN')) {
      alert('Chỉ Admin mới được xoá!');
      return;
    }
  } catch (e) {
    alert('Token không hợp lệ, vui lòng đăng nhập lại!');
    this.router.navigate(['/login']);
    return;
  }

  this.postService.deletePost(id, this.token).subscribe({
    next: () => {
      this.posts = this.posts.filter(p => p.id !== id);
      alert('Đã xóa bài viết!');
    },
    error: err => alert('Xóa thất bại: ' + err.message)
  });
}
}