import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IOrder } from '../models/Order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private readonly apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }
  createOrder(order: IOrder) {
    return this.http.post<IOrder>(`${this.apiUrl}/api/Orders/create`, order);
  }
}
