import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, NgModel } from '@angular/forms'; 
import { ProductService } from './services/product-service';  
import { User } from './component/user/user';
import { RxJsBasics } from './component/rx-js-basics/rx-js-basics';
@Component({
  selector: 'app-root',
  imports: [ButtonModule ,AutoCompleteModule, CheckboxModule , FormsModule, RxJsBasics ],
  
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone:true
})
export class App {
  protected readonly title = signal('servicesInApngular');
// checked: any;
// data:any = signal([])
constructor( ){
}

// ngOnInit()
// {
//   debugger;
//  this.productService.getProducts().subscribe((data)=>{
//     console.log(data)
//   });
  
// }
}
