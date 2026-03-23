import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products-service';

type Param = {
  id?: string;
};

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  currProd?: string;
  product!: Product;
  constructor(
    public route: ActivatedRoute,
    private productService: ProductsService,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((param: Param) => {
      if (param.id) {
        this.currProd = param.id;
      }
    });

    if (this.currProd) {
      //  this.productService.getSingleProduct(this.currProd).subscribe({
      //   next:(data)=>{
      //     if(data instanceof Object){
      //       // this.product = data
      //     }
      //   },
      //   error:(err)=>{
      //     console.log(err)
      //   }
      //  })
    }
  }
}
