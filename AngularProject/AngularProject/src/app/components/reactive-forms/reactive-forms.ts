import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule , CommonModule],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.css',
})
export class ReactiveForms {

  // Created form without using form group used form control here!


//  name= new FormControl('anil');
//  password = new FormControl(123);

//  handleFormValues(event:Event){
//   event.preventDefault()
//   console.log(this.name.value);
//   console.log(this.password.value)
//  }

//  setValues(event:Event){
//   event.preventDefault()
//   this.name.setValue(this.name.value);
//    this.password.setValue(this.password.value);
//  }
profileForm = new FormGroup({
  name:new FormControl('',[Validators.required]) , email: new FormControl('',[Validators.required]) , password:new FormControl('',[Validators.required,Validators.minLength(5)])
})
onSubmit(){
  console.log("On submit called")
  console.log(this.profileForm.valid)
  console.log(this.profileForm.getRawValue())
}

setValues(){
    this.profileForm.setValue({
      name:this.profileForm.value.name,
      email:this.profileForm.value.email,
      password:this.profileForm.value.password
    })
}

get name(){
  return this.profileForm.get("name")
}

get email(){
  return this.profileForm.get("email")
}
get password(){
  return this.profileForm.get("password")
}
}
