import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IProduct } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
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
  getProductByName(name: string) {
    return this.http.get<IProduct>(
      `${this.apiUrl}/api/Products/GetProductByName/${name}`
    );
  }
}
