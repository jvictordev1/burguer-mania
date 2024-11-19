import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { IBurguers } from '../models/Burgers';

@Injectable({
  providedIn: 'root',
})
export class BurguersService {
  private dbContext = './assets/burguers.json';
  constructor(private http: HttpClient) {}
  getAllBurguersFromCategory(id: number) {
    return this.http
      .get<IBurguers[]>(this.dbContext)
      .pipe(
        map((burguers) => burguers.filter((burger) => burger.categoryId === id))
      );
  }
  getBurguerFromId(id: number) {
    return this.http
      .get<IBurguers[]>(this.dbContext)
      .pipe(map((burguers) => burguers.filter((burger) => burger.id === id)));
  }
}
