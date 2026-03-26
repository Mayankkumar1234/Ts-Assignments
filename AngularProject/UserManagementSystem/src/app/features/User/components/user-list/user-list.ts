import { Component, inject, signal } from '@angular/core';
import { Header } from '../../../../shared/components/header/header';
import { AddDetailsForm } from '../../../../shared/dialog/add-details-form/add-details-form';
import { LocalStorageService } from '../../../../shared/services/local-storage-serice';
import { filter, single } from 'rxjs/operators';
import { User } from '../../types/users.type';
import { FormService } from '../../../../shared/services/form-service';

@Component({
  selector: 'app-user-list',
  imports: [Header, AddDetailsForm],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
  providers: [FormService],
})
export class UserList {
  formService = inject(FormService);
  userData = signal<User[]>([]);

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit() {
    console.log('Inside Oninit');
    //  this.formService.formStatus.subscribe((value) => {
    //   //  debugger;
    //    console.log(value);
    //  });
    // this.formService.formStatus.next(false);

    this.getUserData();
  }

  getUserData() {
    let users: string = this.localStorageService.getData('users') || '[]';

    const userData: User[] = JSON.parse(users);

    this.userData.set(userData);
  }

  deleteUser(id: any) {
    console.log('Id', id);
    this.userData.update((users: User[]) =>
      users.filter((u: User) => u.id !== id),
    );

    console.log(this.userData());
    this.localStorageService.addData('users', JSON.stringify(this.userData()));
  }
}
