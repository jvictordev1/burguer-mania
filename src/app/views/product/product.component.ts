import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { IProduct } from '../../models/Product';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent, ButtonComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [ProductsService, CategoriesService],
})
export class ProductComponent implements OnInit {
  category = '';
  burguers: IProduct[] = [];
  burguersData: IProduct[] = [];
  constructor(
    private productsService: ProductsService,
    private categoryService: CategoriesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id');
    this.productsService
      .getAllProductsFromCategory(Number(categoryId))
      .subscribe({
        next: (data) => {
          if (data.length > 3) {
            this.burguers = data.slice(0, 3);
            this.burguersData = data;
            return;
          }
          this.burguers = data;
        },
        error: (error) => {
          console.error(error.error.message);
        },
      });
    this.categoryService
      .getCategoryById(Number(categoryId))
      .subscribe((data) => {
        this.category = data.name;
      });
  }
  handleBurguerCardClick(id: number) {
    this.router.navigate(['details/', id]);
  }
  showCompleteMenu() {
    this.burguers = this.burguersData;
  }
}
