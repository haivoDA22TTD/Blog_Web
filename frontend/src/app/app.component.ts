import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <div class="layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <h2 class="logo">MyApp</h2>
        <nav class="nav-links">
          <a routerLink="/posts" routerLinkActive="active">🏠 Home</a>
          <a routerLink="/create" routerLinkActive="active">✍️ Create Post</a>
          <a routerLink="/login" routerLinkActive="active">🔑 Login</a>
          <a routerLink="/register" routerLinkActive="active">📝 Register</a>
        </nav>
      </aside>

      <!-- Nội dung chính -->
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .layout {
      display: flex;
      height: 100vh;
      font-family: Arial, sans-serif;
    }

    .sidebar {
      width: 220px;
      background: linear-gradient(180deg, #1e3a8a, #2563eb);
      color: white;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 30px;
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      padding: 10px 15px;
      border-radius: 8px;
      transition: background 0.3s;
    }

    .nav-links a:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .nav-links a.active {
      background: rgba(255, 255, 255, 0.4);
      font-weight: bold;
    }

    .content {
      flex: 1;
      padding: 20px;
      background: #f3f4f6;
      overflow-y: auto;
    }
  `]
})
export class AppComponent {}
