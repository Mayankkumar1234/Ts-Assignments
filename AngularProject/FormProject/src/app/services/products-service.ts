import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


export interface ApiResonse{
  products:Product[],
  limit:number,
  skip:number,
  total:number
}

export interface Product{
 id:number,
 category:string,
 images:string[],
  price:number,
  title:string,
  rating:number,
  thumbnail:string
}


@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  
   http = inject(HttpClient);
   apiUrl = "https://dummyjson.com/products"

  getProducts(){

    return this.http.get<ApiResonse>(this.apiUrl);

  }

  getSingleProduct(id:string){
   return this.http.get(this.apiUrl+"/"+id) 
  }
}
