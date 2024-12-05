import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { ButtonComponent } from '../../components/button/button.component';
import { InputContainerComponent } from '../../components/input-container/input-container.component';
import { TextareaContainerComponent } from '../../components/textarea-container/textarea-container.component';
import { IProduct } from '../../models/Product';
import { OrdersService } from '../../services/orders.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    ButtonComponent,
    InputContainerComponent,
    TextareaContainerComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
  providers: [ProductsService],
})
export class OrderComponent implements OnInit {
  burguer: IProduct = {
    id: 0,
    categoryId: 0,
    name: '',
    baseDescription: '',
    fullDescription: '',
    price: 0,
    pathImage: '',
  };
  order: {
    statusId: number;
    userId: number;
    value: number;
    products: {
      id: number | string;
      name: string;
      amount: number | string;
      value: number;
    }[];
    description: string;
  } = {
    statusId: 2,
    userId: 1,
    value: 0,
    products: [
      {
        id: 0,
        name: '',
        amount: '',
        value: 0,
      },
    ],
    description: '',
  };
  orderBurguer: string = '';
  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private productsService: ProductsService,
    private ordersService: OrdersService
  ) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const param = params.get('burguer');
      if (param) {
        const burguer: IProduct = JSON.parse(param);
        this.productsService.getProductById(burguer.id).subscribe((data) => {
          this.burguer = data;
        });
        this.orderBurguer = burguer.name;
        this.order.products[0].id = burguer.id;
        this.order.products[0].name = burguer.name;
        this.order.products[0].value = burguer.price;
        this.cdr.detectChanges(); // Notify Angular of changes
      }
    });
  }
  handleAddNewItem() {
    this.order.products.push({
      id: uuidv4(),
      name: '',
      amount: '',
      value: 0,
    });
  }
  handleDeleteItem(id: number | string) {
    this.order.products = this.order.products.filter((i) => i.id !== id);
  }
  async handleOrderSubmit(form: NgForm) {
    let reqData: {
      statusId: number;
      userId: number;
      description: string;
      value: number;
      products: { id: number; amount: number }[];
    } = {
      statusId: 2,
      userId: 1,
      description: '',
      value: 0,
      products: [],
    };

    if (form.valid) {
      for (const i of this.order.products) {
        if (isNaN(Number(i.amount))) {
          alert('Por favor insira um número no campo quantidade.');
          return;
        }
        i.amount = Number(i.amount);
        if (i.value !== 0) {
          reqData.value += i.value * i.amount;
        } else {
          try {
            const data = await firstValueFrom(
              this.productsService.getProductByName(i.name)
            );
            i.id = data.id;
            reqData.value += data.price * i.amount;
          } catch (error) {
            alert('Por favor insira o nome de um produto existente.');
            return;
          }
        }
        reqData.products.push({
          id: Number(i.id),
          amount: i.amount,
        });
      }
      if (this.order.description) {
        reqData.description = this.order.description;
      }
      this.ordersService.createOrder(reqData).subscribe({
        next: () => {
          alert('Pedido realizado com sucesso.');
        },
        error: (err) => {
          console.error(err.error.message);
        },
      });
      this.order = {
        statusId: 5,
        userId: 1,
        value: 0,
        products: [
          {
            id: 0,
            name: '',
            amount: '',
            value: 0,
          },
        ],
        description: '',
      };
      form.reset();
    }
  }
  trackById(index: number, item: any): number {
    return item.id;
  }
}
