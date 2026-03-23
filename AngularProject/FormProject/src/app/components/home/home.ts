import { Component } from '@angular/core';
import { Product, ProductsService } from '../../services/products-service';
import { Header } from '../../shared/header/header';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [Header, RouterOutlet, RouterLinkWithHref],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {


  productsArr:Product[] = []
  total!:number;
  itemPerPage = 9;
  totalPages!:number;
  pages!:number[]
  constructor(private productService:ProductsService){}

  ngOnInit(){
    this.displayProducts()
    
  }

  displayProducts(){
this.productService.getProducts().subscribe({
      next:(res)=>{
      this.total = res.total 

const totalPages = Math.ceil(this.total / this.itemPerPage);

this.pages= Array.from({ length: totalPages }, (_, i) => i + 1);

console.log(this.pages);
       this.productsArr = res.products
       console.log(this.total)
      },
      error:(err)=>{
        console.log("Error", err)
      }
    }) 
    
  
  }
}
