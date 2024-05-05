import { Route } from '@angular/router';
import { EventFormComponent } from '@features/edit-event';

const routes: Route[] = [
  {
    path: 'blank',
    component: EventFormComponent
  }
];

export default routes;
