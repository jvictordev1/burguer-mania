import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { ICategory } from '../../models/Category';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  providers: [CategoryService],
})
export class MenuComponent implements OnInit {
  categories: ICategory[] = [];
  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
