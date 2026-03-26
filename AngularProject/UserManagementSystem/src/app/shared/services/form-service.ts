import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class FormService {
  // formStatus = signal<boolean>(false)

  formStatus = new BehaviorSubject<boolean>(false);

  constructor() {
    console.log('====================================');
    console.log('form service');
    console.log('====================================');
  }

  handleFormStatus(status: boolean) {
    this.formStatus.next(status);
  }

  getFormStatus(){
    
  }
}
