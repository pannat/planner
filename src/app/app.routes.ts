import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'events',
    loadChildren: () => import('@libs/routes/edit-event')
  }
];
