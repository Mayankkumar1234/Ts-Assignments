import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registration } from './components/registration/registration';

export const routes: Routes = [
  {
    path:"",
    component:Registration
  },
  {path:"login",
    component:Login
  }
];