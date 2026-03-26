import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddDetailsForm } from '../../dialog/add-details-form/add-details-form';
import { FormService } from '../../services/form-service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers: [FormService],
})
export class Header {
  formStatus = signal<boolean>(false);

  formService = inject(FormService);

  // constructor() {
  //   super();
  // }
  handleService() {
    console.log('====================================');
    console.log('service');
    console.log('====================================');
    // this.formService.handleFormStatus();
    this.formService.formStatus.subscribe((value) => {
      debugger;
      this.formStatus.set(value);
      console.log('Value', value);
    });
    this.formService.handleFormStatus(!this.formStatus());
  }
}
