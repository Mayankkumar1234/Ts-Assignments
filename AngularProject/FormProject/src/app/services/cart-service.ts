import { Injectable, signal } from '@angular/core';
import { LocalStorageService } from './local-storage-service';
import { ProductsService } from './products-service';
import { Product } from './products-service';


interface CartObj{
  [key:number]:Cart1
}

export interface Cart1{
  id:number,
name?:string,
price:number,
thumbnail:string,
title:string,
count:number
}

@Injectable({
  providedIn: 'root',
})
export class CartService {

  

  count = signal(0) 
  cartData:Cart1[]=[];
  constructor(private localStorageService:LocalStorageService, private productService:ProductsService){
   let data = this.localStorageService.getData("cart");
    // debugger
   if(data !== null){
     this.cartData = JSON.parse(data);
     console.log(this.cartData)
     this.count.set(this.cartData.length)
   }

  }

   
 



  checkExists(id:number){
    console.log(this.cartData)
    let data = this.localStorageService.getData("cart");
      if(data !== null){
     this.cartData = JSON.parse(data);
   }
    if(!this.cartData){
      return false
    }
    let checkExist = this.cartData.find(p=> p.id === id)
    if(checkExist){
      return true
     }
     return false
  }
  addData(product:Cart1){
    if(this.checkExists(product.id)){
       alert("Product already exists")
       return 
    }
 
    let updateData = JSON.stringify([...this.cartData ,product])
    this.localStorageService.addData("cart",updateData)
     this.count.update(c => c + 1);
    alert("Product added to cart")

  }
  increaseCount(){
     
  }

  decreaseCount(){

  }
 

  cartCount(){
 return this.count()
  }
}
