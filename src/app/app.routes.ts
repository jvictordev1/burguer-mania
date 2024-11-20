import { Routes } from '@angular/router';
import { DetailComponent } from './views/detail/detail.component';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { OrderComponent } from './views/order/order.component';
import { ProductComponent } from './views/product/product.component';

export const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'category/:id',
    component: ProductComponent,
  },
  {
    path: 'details/:id',
    component: DetailComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];
