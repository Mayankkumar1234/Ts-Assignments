import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgStyle],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
 color:string= "red";

 setBgColor(colorName:string){
  this.color = colorName
 }
}
