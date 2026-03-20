import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  imports: [],
  templateUrl: './two-way-data-binding.html',
  styleUrl: './two-way-data-binding.css',
})
export class TwoWayDataBinding {
name = signal("Mayank")
age =21

userData = signal({
  name:"Mayank",
  age:22,
  email:"mk123@gmail.com"
})

updateUserData(key:string , value:string){
    this.userData.update((item)=>({
      ...item, [key]:value
    }))
}
}
