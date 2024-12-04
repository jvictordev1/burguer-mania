import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ICategory } from '../models/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private readonly apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
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
