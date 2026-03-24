import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-output-decorator',
  imports: [],
  templateUrl: './input-output-decorator.html',
  styleUrl: './input-output-decorator.css',
})
export class InputOutputDecorator {
 @Input() user:string='';
}
