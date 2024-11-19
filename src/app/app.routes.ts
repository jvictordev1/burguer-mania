import { Routes } from '@angular/router';
import { DetailComponent } from './views/detail/detail.component';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
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
  { path: '', component: HomeComponent },
];
