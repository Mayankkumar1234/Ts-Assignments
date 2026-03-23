import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Registration } from './components/registration/registration';
import { Login } from './components/login/login';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [ 
    RouterOutlet 
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('FormProject');
}
