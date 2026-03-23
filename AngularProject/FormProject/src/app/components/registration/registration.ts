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
  imports: [ReactiveFormsModule ],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})




export class Registration {

  private fb =  inject(FormBuilder)
 personalDetails={ 
    name:['',Validators.required],
     email:['', [Validators.required, Validators.email]],
       phone:['', [Validators.required, 
  Validators.minLength(10)]],
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

  currPage = 1;
  numArr = [1,2,3];
  states:string[] = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", " West Bengal"]

  constructor(private router: Router ,private localStorageService:LocalStorageService){}

  ngOnInit(){
  }

  // checkValidation(val: FormControl) {
  //   console.log(val.validator)
  //   // debugger
  // }

   

  handleStepperPage(page:number){
   
    if(page<this.step()){

       this.currPage = page
     return 
      }
   
    if(page === 2 && this.registrationForm.get("step1")?.valid  )
      { 
            const data:string  =  this.localStorageService.getData("users") || "{}"
   const user:Record<string , User> = JSON.parse(data)  || {};
   let email = this.registrationForm?.get("step1.email")?.value || ""
   if(user[email]){
    alert("User already exists");
    return 
   }
        this.step.set(page)
        this.currPage = page
   console.log(page)
  }else if(page === 3 && this.registrationForm.get("step2")?.valid ){
    this.step.set(page)
      this.step.set(page)
        this.currPage = page
   console.log(page)
  }else{

    console.log(this.registrationForm.get("step1")?.valid)
    console.log(this.registrationForm.get("step1")?.value)
    console.log(this.registrationForm.get("step2")?.valid)
    console.log(this.registrationForm.get("step2")?.value)
    // debugger
    alert(`Please fill all the details of Page ${this.step()}`)
  }
}
decreseVal(){
  this.step.update(val=>val-1)
}

  onSubmit(){  

    const data:string  =  this.localStorageService.getData("users") || "{}"
   const user:Record<string , User> = JSON.parse(data)  || {};
  console.log(user)
  const userData = this.registrationForm.value;
  let email = this.registrationForm.value.step1?.email || "";
   
  if( this.registrationForm.get("step3")?.invalid){
    alert("Please fill the details properly and password must be of length 6")
    return 
  }

      if(user[email]){
        alert("User already exists, Please login")
        return
      }
  
      
      if(userData.step3?.password !== userData.step3?.confirmPassword){
        alert("Both the Password must be same, Please try again")
        return
      }
if (userData && email) {
  
  console.log(this.registrationForm.value)
  let email = userData.step1?.email || "";
  let password = userData.step3?.password;
  let UserData = {
    email,
    password
  }
  
  
  this.localStorageService.addData("users",JSON.stringify({...user,[email]:UserData}))
  
  alert("User register  successfully")
    this.router.navigate(['/login']);

}  

// if (userData && userData.email) {
//   localStorage.setItem("users", JSON.stringify( userData));
// } else {
//   console.error("userData or email is missing");
// }
   
// }

  }
}
