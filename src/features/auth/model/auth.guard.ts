import { CanMatchFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanMatchFn = (route, segments) => {
  const service = inject(AuthService);
  return service.isAuthorized;
};
