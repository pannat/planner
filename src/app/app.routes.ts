import { Routes } from '@angular/router';
import { authGuard } from '@features/auth';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'events',
        loadChildren: () => import('./routes/edit-event'),
      },
      {
        path: '**',
        redirectTo: 'events',
      },
    ],
    canMatch: [authGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./routes/login'),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./routes/sign-up'),
  }
];
