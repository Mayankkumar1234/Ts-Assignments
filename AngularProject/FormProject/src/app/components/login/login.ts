import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
 
type User={
  email:string | null,
   password:string | null
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule , RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 loginForm = new FormGroup({
     
     email:new FormControl('' , Validators.required),
         password:new FormControl('',[ Validators.required,  Validators.minLength(6)]),
  })
  onSubmit(){ 
    // const userData:Data = this.loginForm.value as Data
  //  console.log(this.loginForm.value
  if (this.loginForm.invalid) {
    // this.loginForm.markAllAsTouched();
    alert("Please fill all required fields correctly");
    return;
  }
  //  const userData:Partial<User> = this.loginForm.value ;
  const user:Record<string , User> =JSON.parse(localStorage.getItem("users") || '')  || {};
  // const email  = userData?.email && userData.email
  const email = this.loginForm.value.email!;     
  const password = this.loginForm.value.password!;
    if(!user[email]){
    console.log("Please fill all the details")
    return 
  }  
   if(!user[email]){
    alert("Email not found please signUp")
    return 

   }else{
    if(user[email].password  ==password){
      alert("Please check the password")
      return 
    }
   }
  
    alert("Login Successfully!")
    this.loginForm.setValue({
      
      email:'',
      password:''
    }) 

    console.log(this.loginForm.value)
}
 
  get email() {
    return this.loginForm.get('email');
  }
      get password() {
    return this.loginForm.get('password');
  }
  
}

 