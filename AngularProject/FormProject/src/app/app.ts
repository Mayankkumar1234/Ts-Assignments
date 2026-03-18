import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Registration } from './components/registration/registration';
import { Login } from './components/login/login';

@Component({
  selector: 'app-root',
  imports: [ 
    RouterOutlet , RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FormProject');
}
