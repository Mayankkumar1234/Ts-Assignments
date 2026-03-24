import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { RjsOperator } from './component/rjs-operator/rjs-operator';
import { SujectBehaviourSubjectRxjs } from './component/suject-behaviour-subject-rxjs/suject-behaviour-subject-rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SujectBehaviourSubjectRxjs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PractiseProject');
}
