import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage-service';

 
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

  constructor(private router: Router, private localStorageService:LocalStorageService){}
  onSubmit(){ 
    // const userData:Data = this.loginForm.value as Data
  //  console.log(this.loginForm.value
  if (this.loginForm.invalid) {
    // this.loginForm.markAllAsTouched();
    alert("Please fill all required fields correctly");
    return;
  }

  console.log(this.loginForm.value)
  //  const userData:Partial<User> = this.loginForm.value ;
  const user:Record<string , User> =JSON.parse(this.localStorageService.getData("users") || '')  || {};
  // const email  = userData?.email && userData.email
  const email = this.loginForm.value.email!;     
  const password = this.loginForm.value.password;
  console.log(email , password)
  console.log(user[email].password === password)
    if(!user[email]){
    console.log("Please fill all the details")
    return 
  }  
   if(!user[email]){
    alert("Email not found please signUp")
    return 

   }else{
    if(user[email].password !== password){
      alert("Please check the password")
      return 
    }
   }
    // this.router.redir
    this.router.navigate(["/home"])
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

 