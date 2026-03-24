import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-froms',
  imports: [FormsModule],
  templateUrl: './template-driven-froms.html',
  styleUrl: './template-driven-froms.css',
})
export class TemplateDrivenFroms {
formValues(val:NgForm){
 console.log(val) 
}
}
