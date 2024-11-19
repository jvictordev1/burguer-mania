import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICategory } from '../models/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private dbContext = './assets/categories.json';
  constructor(private http: HttpClient) {}
  getAllCategories() {
    return this.http.get<ICategory[]>(this.dbContext);
  }
}
