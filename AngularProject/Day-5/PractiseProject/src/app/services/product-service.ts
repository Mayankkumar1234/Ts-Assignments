import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

interface Data{
  products:[],
  limit:number,
  total:number,
  skip:number
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  apiUrl = "https://dummyjson.com/products"
     http = inject(HttpClient);
   constructor(){}

   getProducts(){
     return this.http.get(this.apiUrl)
   }


}
