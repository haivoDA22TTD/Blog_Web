import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
  <div class="auth-container">
    <h2>Login</h2>
    <form (ngSubmit)="onLogin()">
      <input [(ngModel)]="username" name="username" placeholder="Username" required />
      <input [(ngModel)]="password" name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
  `,
  styles: [`
    .auth-container {
      width: 300px; margin: auto; padding: 20px;
      border: 1px solid #ccc; border-radius: 10px;
      text-align: center;
    }
    input {
      width: 100%; padding: 10px; margin: 10px 0;
      border: 1px solid #ddd; border-radius: 5px;
    }
    button {
      padding: 10px 15px; border: none; border-radius: 5px;
      background: #007bff; color: white; cursor: pointer;
    }
    button:hover { background: #0056b3; }
  `]
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        this.router.navigate(['/posts']);
      },
      error: () => alert('Login failed')
    });
  }
}
