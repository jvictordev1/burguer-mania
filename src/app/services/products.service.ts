import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:5031';
  }
  getAllProductsFromCategory(id: number) {
    return this.http.get<IProduct[]>(
      `${this.apiUrl}/api/Products/GetAllProductsByCategory/${id}`
    );
  }
  getProductById(id: number) {
    return this.http.get<IProduct>(
      `${this.apiUrl}/api/Products/GetProductById/${id}`
    );
  }
}
