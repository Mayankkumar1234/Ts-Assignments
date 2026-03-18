import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { Validator } from '@angular/forms';
import { RouterLink, RouterOutlet , Router } from '@angular/router';
 



type User = {
   name: string | null;
   email: string |null;
    phone: string | null; 
    gender: string | null;
     photo: string |null;
      password: string |null
}



@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule , RouterLink ],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})




export class Registration {
  registrationForm = new FormGroup({
    name:new FormControl('', Validators.required),
     email:new FormControl('' , Validators.required),
      phone:new FormControl('' ,  [Validators.required ,Validators.maxLength(10)]),
       gender:new FormControl(''),
        photo:new FormControl(''),
         password:new FormControl('',[ Validators.required,  Validators.minLength(6)]),
  }) 

  constructor(private router: Router){}

  ngOnInit(){

  }

  // checkValidation(val: FormControl) {
  //   console.log(val.validator)
  //   // debugger
  // }

  onSubmit(){ 
    const userData:Partial<User> = this.registrationForm.value ;

   const user:Record<string , User> =JSON.parse(localStorage.getItem("users") || '')  || {};
   console.log(user)
  console.log(userData.email)
  if(!userData.email || !userData.name || !userData.password || !userData.phone){
    console.log("Please fill all the details")
    return 
  }
   const email = userData.email; 

      if(user[email]){
        alert("User already exists, Please login")
        return
      }
  
console.log("User" ,userData)
if (userData && userData.email) {
  localStorage.setItem("users", JSON.stringify({...user ,[userData.email]: userData}));
  alert("User register  successfully")
    this.router.navigate(['/login']);
}  

// if (userData && userData.email) {
//   localStorage.setItem("users", JSON.stringify( userData));
// } else {
//   console.error("userData or email is missing");
// }
   this.registrationForm.setValue({
      name:'',
      email:'',
      password:'',
      gender:'',
      photo:'',
      phone:''
    })
  }
    get name() {
      // console.log("Hover on name")
    return this.registrationForm.get('name');
    
  }
  get email() {
    // console.log("Hover on email")
    return this.registrationForm.get('email');
  }
      get phone() {
// console.log("Hover on phone")
    return this.registrationForm.get('phone');
  }
  get gender() {
    // console.log("Hover on gender")
    return this.registrationForm.get('gender');
  }
      get photo() {
        // console.log("Hover on photo")
    return this.registrationForm.get('photo');
  }
  get password() {
    // console.log("Hover on password")
    return this.registrationForm.get('password');
  }
}
