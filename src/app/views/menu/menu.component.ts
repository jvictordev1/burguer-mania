import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { ICategory } from '../../models/Category';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonComponent, CommonModule, CardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [CategoriesService],
})
export class MenuComponent implements OnInit {
  categories: ICategory[] = [];
  data: ICategory[] = [];
  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.categoriesService.getAllCategories().subscribe((data) => {
      this.categories = data.length > 3 ? data.slice(0, 3) : data;
      this.data = data;
    });
  }
  trackByFn(index: number, category: ICategory): number {
    return category.id;
  }
  handleCategoryClick(categoryId: number) {
    this.router.navigate(['category/', categoryId]);
  }
  showCompleteMenu() {
    this.categories = this.data;
  }
}
