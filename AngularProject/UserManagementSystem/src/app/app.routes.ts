import { Routes } from '@angular/router';
import { AddDetailsForm } from './shared/dialog/add-details-form/add-details-form';
import { UserList } from './features/User/components/user-list/user-list';

export const routes: Routes = [
  {
    path: '',
    component: UserList,
  },
  {
    path: 'addDetails',
    component: AddDetailsForm,
  },
];
