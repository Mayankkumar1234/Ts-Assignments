import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiService } from './api-service';

export interface ApiResonse {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}

export interface Product {
  id: number;
  category: string;
  images: string[];
  price: number;
  title: string;
  rating: number;
  thumbnail: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private apiService: ApiService) {}

  getProducts(limit: number, skip: number) {
    return this.apiService.get('products', limit, skip);
  }

  getSingleProduct(id: string) {
    // return this.apiService.get(`/products/${id}`);
  }
}
