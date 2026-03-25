import { Component, inject, signal } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage-serice';
import { User } from '../../../features/User/types/users.type';

@Component({
  selector: 'app-add-details-form',
  imports: [ReactiveFormsModule],
  templateUrl: './add-details-form.html',
  styleUrl: './add-details-form.css',
})
export class AddDetailsForm {
  private fb = inject(FormBuilder);
  personalDetails = {
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],

    photo: [''],
    gender: ['', Validators.required],
  };
  contactDetails = {
    email: this.fb.array([
      this.fb.control('', [Validators.required, Validators.email]),
    ]),
    phone: this.fb.array([
      this.fb.control('', [Validators.required, Validators.minLength(10)]),
    ]),
  };
  address = {
    area: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
  };

  registrationForm = this.fb.group({
    step1: this.fb.group(this.personalDetails),
    step2: this.fb.group(this.contactDetails),
    step3: this.fb.group(this.address),
  });

  step = signal(1);

  currPage = 1;
  numArr = [1, 2, 3];
  states: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    ' West Bengal',
  ];
  emailArray: any;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit() {}

  checkValidation(val: FormControl) {
    console.log(val.validator);
    // debugger
  }

  handleStepperPage(page: number) {
    if (page < this.step()) {
      this.currPage = page;
      return;
    }

    if (page === 2 && this.registrationForm.get('step1')?.valid) {
      const data: string = this.localStorageService.getData('users') || '{}';
      const user: Record<string, User> = JSON.parse(data) || {};
      // let email = this.registrationForm?.get('step1.email')?.value || '';
      // if (user[email]) {
      //   alert('User already exists');
      //   return;
      // }
      this.step.set(page);
      this.currPage = page;
      console.log(page);
    } else if (page === 3 && this.registrationForm.get('step2')?.valid) {
      this.step.set(page);
      this.step.set(page);
      this.currPage = page;
      console.log(page);
    } else {
      console.log(this.registrationForm.get('step1')?.valid);
      console.log(this.registrationForm.get('step1')?.value);
      console.log(this.registrationForm.get('step2')?.valid);
      console.log(this.registrationForm.get('step2')?.value);
      // debugger
      alert(`Please fill all the details of Page ${this.step()}`);
    }
  }
  decreseVal() {
    this.step.update((val) => val - 1);
  }

  onSubmit() {
    // console.log(this.registrationForm.value);
    // const data: string = this.localStorageService.getData('users') || '{}';
    // const user: Record<string, User> = JSON.parse(data) || {};
    // console.log(user);
    // const userData = this.registrationForm.value;
    // let email = this.registrationForm.value.step2?.email || '';

    // if (this.registrationForm.get('step3')?.invalid) {
    //   alert(
    //     'Please fill the details properly and password must be of length 6',
    //   );
    //   return;
    // }

    // if (user[email]) {
    //   alert('User already exists, Please login');
    //   return;
    // }

    // if (userData && email) {
    //   console.log(this.registrationForm.value);
    //   let email = userData.step2?.email || '';
    //   let password = userData.step3;
    //   let UserData = {
    //     email,
    //     password,
    //   };

    const userData = {
      ...this.registrationForm.value.step1,
      ...this.registrationForm.value.step2,
      ...this.registrationForm.value.step3,
    };

    console.log(userData);
    // this.localStorageService.addData('users', JSON.stringify(userData));

    // this.localStorageService.addData(
    //   'users',
    //   JSON.stringify({ ...user, [email]: UserData }),
    // );

    alert('User Data  successfully');
    //   this.router.navigate(['/login']);
    // }

    // if (userData && userData.email) {
    //   localStorage.setItem("users", JSON.stringify( userData));
    // } else {
    //   console.error("userData or email is missing");
    // }
  }
  get emailControls(): FormArray {
    const control = this.registrationForm.get('step2.email');
    return control instanceof FormArray ? control : this.fb.array([]);
  }
  get phoneControls(): FormArray {
    const control = this.registrationForm.get('step2.phone');
    return control instanceof FormArray ? control : this.fb.array([]);
  }
  addEmail(): void {
    this.emailControls.push(
      this.fb.control('', [Validators.required, Validators.email]),
    );
  }

  addPhone(): void {
    this.phoneControls.push(
      this.fb.control('', [Validators.required, Validators.minLength(10)]),
    );
  }

  removeEmail(index: number) {
    if (this.emailControls.length > 1) {
      this.emailControls.removeAt(index);
    }
  }

  removePhone(index: number) {
    if (this.phoneControls.length > 1) {
      this.phoneControls.removeAt(index);
    }
  }
}
