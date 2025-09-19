import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { AuthInterceptor } from './auth-interceptor';
// import { authInterceptor } from './interceptors/auth.interceptor'; // nếu có interceptor

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      // Nếu có interceptor thì thêm ở đây
      // withInterceptors([authInterceptor])
     
    )
  ]
};
