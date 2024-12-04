import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IOrder } from '../models/Order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private readonly apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = 'http://localhost:5031';
  }
  createOrder(order: IOrder) {
    return this.http.post<IOrder>(`${this.apiUrl}/api/Orders/create`, order);
  }
}
