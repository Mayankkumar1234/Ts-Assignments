import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResonse } from './products-service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);

  apiUrl = 'https://dummyjson.com/';

  get(route: string, limit: number, skip: number) {
    return this.http.get<ApiResonse>(
      `${this.apiUrl}${route}?limit=${limit}&skip=${skip}`,
    );
  }
  post() {}
  put() {}
  delete() {}
}
