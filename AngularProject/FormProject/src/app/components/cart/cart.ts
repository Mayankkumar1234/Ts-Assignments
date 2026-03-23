import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { LocalStorageService } from '../../services/local-storage-service';
import { Cart1 } from '../../services/cart-service';

@Component({
  selector: 'app-cart',
  imports: [Header],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  cartData:Cart1[] = [];
  constructor(private localStorageService:LocalStorageService){}

  ngOnInit(){
  let data  = this.localStorageService.getData("cart");
  if(data != null){
    this.cartData = JSON.parse(data)

  }
  }

} 
