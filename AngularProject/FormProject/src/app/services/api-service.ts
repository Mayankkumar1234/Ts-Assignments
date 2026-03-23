import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  get(){

  }
  post(){

  }
  put(){

  }
  delete(){
    
  }
}
