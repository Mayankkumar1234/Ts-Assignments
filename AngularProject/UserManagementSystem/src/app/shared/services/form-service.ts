import { Injectable, signal } from '@angular/core';

@Injectable()
export class FormService {
  formStatus = signal<boolean>(false)

  handleFormStatus(){
         this.formStatus.update(u=> !u)
  }

}
