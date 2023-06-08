import {Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {DetailsComponent} from './details/details.component';

export const routes: Routes = [
  {
    path: 'list',
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: ':name',
        outlet: 'details',
        component: DetailsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];
