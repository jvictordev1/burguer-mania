import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:5031';
  }
  getAllCategories() {
    return this.http.get<ICategory[]>(`${this.apiUrl}/api/Category/all`);
  }
  getCategoryById(id: number) {
    return this.http.get<ICategory>(
      `${this.apiUrl}/api/Category/GetCategoryById/${id}`
    );
  }
}
