import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { from, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-rjs-operator',
  imports: [],
  templateUrl: './rjs-operator.html',
  styleUrl: './rjs-operator.css',
})
export class RjsOperator {
  // private mySub!: Subscription;
  noList1$ = from([11,12,13,14,15,16,17,18])
  rollNoList$ = of([11,12,13,14,])
  constructor(private http:HttpClient){

  }

  ngOnInit(){
    //  this.http.get("https://dummyjson.com/products").subscribe(res=> console.log(res))
    // this.mySub =   this.http.get("https://dummyjson.com/products").subscribe({
    //   next:(data)=>{
    //     console.log("Successfully Recieved Data", data)
    //   },
    //   error:(err)=>{
    //      console.log('Error Occurred', err.message)
    //   },
    //   complete:()=>{
    //     console.log("Data fetching completed")
    //   }
    // })
    
  }

  // ngOnDestroy(){
  //   if (this.mySub) {
  //     this.mySub.unsubscribe();
  //     console.log('Successfully unsubscribed!');
  //   }
  // }
}
