import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Registration } from './components/registration/registration';
import { Home } from './components/home/home';
import { authGuard } from './guards/auth-guard';
import { Cart } from './components/cart/cart';
import { Product } from './components/product/product';

export const routes: Routes = [
  {
    path:"",
    component:Registration
  },
  {path:"login",
    component:Login
  },
  {
    path:"product",
    component:Home,
    canActivate:[authGuard],
   
  },
  {
    path:'home/cart',
    component:Cart,
    canActivate:[authGuard]
  },
  {
    path:"product/:id",
    component:Product
  } 
];