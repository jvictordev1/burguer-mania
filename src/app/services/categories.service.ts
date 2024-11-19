import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ICategory } from '../models/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private dbContext = './assets/categories.json';
  constructor(private http: HttpClient) {}
  getAllCategories() {
    return this.http.get<ICategory[]>(this.dbContext);
  }
  getCategoryById(id: number) {
    return this.http
      .get<ICategory[]>(this.dbContext)
      .pipe(
        map((categories) => categories.filter((category) => category.id === id))
      );
  }
}
