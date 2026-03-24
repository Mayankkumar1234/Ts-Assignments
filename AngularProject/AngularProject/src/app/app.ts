import { Component, Directive, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Admin } from './components/admin/admin';
// import { User } from './components/user/user';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { TwoWayDataBinding } from './components/two-way-data-binding/two-way-data-binding';
import { TemplateDrivenFroms } from './components/template-driven-froms/template-driven-froms';
 import { Highlight } from './components/highlight/highlight';
// import { Members } from './components/members/members';
// import { InputOutputDecorator } from './components/input-output-decorator/input-output-decorator';
// import { Directives } from './components/directives/directives';
// import { ReactiveForms } from './components/reactive-forms/reactive-forms';

@Component({
  selector: 'app-root',
  // imports: [ NgFor],
  imports: [ CommonModule,Highlight ], //
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularProject');
  // counter = 0;

  // updateCounter(){
  //   this.counter++
  // }

  // students = ["Anil", "Sam", "Peter", "Bruce"];

  
}
