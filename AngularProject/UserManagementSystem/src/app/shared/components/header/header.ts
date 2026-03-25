import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AddDetailsForm } from '../../dialog/add-details-form/add-details-form';
import { FormService } from '../../services/form-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers: [FormService],
})
export class Header {
  formService = inject(FormService);
  // constructor() {
  //   super();
  // }
  handleService() {
    this.formService.handleFormStatus();
  }
}
