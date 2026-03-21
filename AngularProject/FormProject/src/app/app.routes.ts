import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registration } from './components/registration/registration';
import { Home } from './components/home/home';

export const routes: Routes = [
  {
    path:"",
    component:Registration
  },
  {path:"login",
    component:Login
  },
  {
    path:"home",
    component:Home
  }
];