import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  console.log("Auth guard");
  const router  = inject(Router);
    const isLoggedIn  = localStorage.getItem("auth")

    console.log(isLoggedIn)
    if(isLoggedIn === "yes"){
      return true
    }else{
    router.navigateByUrl("/login")
      return false;
    }
};
