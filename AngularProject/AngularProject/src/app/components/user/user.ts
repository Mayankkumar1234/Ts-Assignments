import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User{
  @Input() counter = 1
  //  counter = 0
  name= "Mayank"
constructor(){
  this.name = "Rohit"
  console.log("Constructor is loaded")
}
 ngOnInit(){
   console.log("Inside the ngOnInit")
   this.name = "Sam"
 }
 ngOnDestroy(): void {
   console.log("Inside the on ngOnDestroy")
 }
ngOnChanges(): void {
  console.log("Input is changing...")
}

}
