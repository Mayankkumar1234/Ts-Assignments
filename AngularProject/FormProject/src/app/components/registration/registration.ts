import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; 
import { RouterLink, RouterOutlet , Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage-service'; 
 



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

  private fb =  inject(FormBuilder)
 personalDetails={ 
    name:['',Validators.required],
     email:['', [Validators.required, Validators.email]],
       phone:['', [Validators.required, 
  Validators.minLength(10) ,Validators.pattern(/^\d{10,15}$/)]],
      photo:[''],
      gender:['', Validators.required]}
     address ={

       area:['', Validators.required],
       city:['', Validators.required],
       state:['', Validators.required],
     }
     password = {
      
         password:['', [Validators.required,Validators.minLength(6) ]],
         confirmPassword:['', [Validators.required,Validators.minLength(6) ]]
     }
     
  registrationForm =  this.fb.group({
   
  step1:this.fb.group(this.personalDetails),
  step2:this.fb.group(this.address),
   step3:this.fb.group(this.password)

  // ...this.personalDetails , ...this.address, ...this.password
  }) 


  step = signal(1)
  numArr = [1,2,3];
  states:string[] = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", " West Bengal"]

  constructor(private router: Router ,private localStorageService:LocalStorageService){}

  ngOnInit(){
  }

  // checkValidation(val: FormControl) {
  //   console.log(val.validator)
  //   // debugger
  // }

  valueChange(value: Event) {
    console.log('====================================');
    console.log(this.registrationForm);

  }

  handleStepperPage(page:number){
   

   
    if(page === 2 && this.registrationForm.get("step1")?.valid)
      {  this.step.set(page)
   console.log(page)
  }else if(page === 3 && this.registrationForm.get("step2")?.valid){
    this.step.set(page)
   console.log(page)
  }else{

    console.log(this.registrationForm.get("step1")?.valid)
    console.log(this.registrationForm.get("step1")?.value)
    console.log(this.registrationForm.get("step2")?.valid)
    console.log(this.registrationForm.get("step2")?.value)
    alert(`Please fill all the details of Page ${page-1}`)
  }
}
decreseVal(){
  this.step.update(val=>val-1)
}

  onSubmit(){ 
//     const userData:Partial<User> = this.registrationForm.value ;

//     const data:string  =  this.localStorageService.getData("users") || "{}"
//    const user:Record<string , User> = JSON.parse(data)  || {};
//   console.log(user)
//   console.log(userData.email)
//   if(!userData.email || !userData.name || !userData.password || !userData.phone){
//     console.log("Please fill all the details")
//     return 
//   }
//    const email = userData.email; 

//       if(user[email]){
//         alert("User already exists, Please login")
//         return
//       }
  
// console.log("User" ,userData)
// if (userData && userData.email) {
//   this.localStorageService.addData("users", JSON.stringify({...user ,[userData.email]: userData}));
//   alert("User register  successfully")
//     this.router.navigate(['/login']);

console.log(this.registrationForm.value)
}  

// if (userData && userData.email) {
//   localStorage.setItem("users", JSON.stringify( userData));
// } else {
//   console.error("userData or email is missing");
// }
   
// } 
}
