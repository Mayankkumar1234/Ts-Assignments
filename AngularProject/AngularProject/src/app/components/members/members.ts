import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  imports: [],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  title = "Hello"
  grade = "A"
  items = [{id:1, name:"item1"},{id:2 , name:"item2"}, {id:3, name:"item3"}]
}
