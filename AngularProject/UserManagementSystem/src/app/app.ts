import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserList } from './features/User/components/user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [UserList, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('UserManagementSystem');
}
