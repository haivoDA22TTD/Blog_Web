import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('jwtToken'); // 👈 dùng đúng key của AuthService

  if (!token) {
    console.warn('Không có token, chuyển hướng login');
    router.navigate(['/login']);
    return false;
  }

  try {
    const payload: any = jwtDecode(token);

    console.log('Decoded JWT payload:', payload);

    const roles: string[] = payload.roles || [];

    if (roles.includes('ROLE_ADMIN')) {
      return true; //  admin vào được
    }
  } catch (e) {
    console.error('Token decode error', e);
  }

  router.navigate(['/posts']); //  user hoặc token lỗi thì chặn
  return false;
};
