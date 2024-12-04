import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { IProduct } from '../../models/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ButtonComponent, CardComponent, CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  providers: [ProductsService],
})
export class DetailComponent implements OnInit {
  burguer: IProduct = {
    id: 0,
    categoryId: 0,
    name: '',
    baseDescription: '',
    fullDescription: '',
    price: 0,
    pathImage: '',
  };
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const burguerId = this.route.snapshot.paramMap.get('id');
    this.productsService.getProductById(Number(burguerId)).subscribe({
      next: (data) => {
        this.burguer = data;
      },
      error: (error) => {
        console.error(`Error: ${error.error.message}`);
      },
    });
  }
  handleBuyItemClick(burguer: string) {
    this.router.navigate(['order'], {
      queryParams: { burguer: burguer },
    });
  }
}
