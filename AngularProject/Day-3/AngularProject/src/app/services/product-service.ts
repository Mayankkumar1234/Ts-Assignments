import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
   rating:number
}

interface ApiResponse{
 products:Product[],
 limit:number,
 skip:number,
 total:number
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {

   apiUrl = "https://dummyjson.com/products"
 constructor(private http:HttpClient){
  
  console.log("Service called...")
 } 
 getProducts(){
  
  return this.http.get<ApiResponse>(this.apiUrl)
 }
 addProduct(){
  
 }
 updateProduct(){

 }

 deleteProduct(){

 }
}
