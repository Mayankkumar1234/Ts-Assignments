import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';


interface ApiResponse{
 products:Product[],
 limit:number,
 skip:number,
 total:number
}


 interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string; 
   rating:number
}


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  products:Product[] = []
//  constructor(private productService:ProductService){}
productService = inject(ProductService)
 
 ngOnInit(){
this.productService.getProducts().subscribe({
      next: (data: ApiResponse) => {   
        console.log(data?.products && data?.products);
        this.products = data?.products
       
        if (data?.products) {
          console.log('Products array:', data.products);
        }
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
 }
 
}
