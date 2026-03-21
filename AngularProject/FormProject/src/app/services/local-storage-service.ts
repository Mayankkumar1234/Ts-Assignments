import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  
  constructor(){
    console.log("Service called...")
  }
  addData(dataType:string , data:string):void{
    localStorage.setItem(dataType, data)
  }
  getData(dataType:string){
    return  localStorage.getItem(dataType)
  }
}
