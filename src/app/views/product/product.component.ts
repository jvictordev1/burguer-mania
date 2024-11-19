import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { IBurguers } from '../../models/Burgers';
import { BurguersService } from '../../services/burguers.service';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent, ButtonComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [BurguersService, CategoriesService],
})
export class ProductComponent implements OnInit {
  category = '';
  burguers: IBurguers[] = [];
  burguersData: IBurguers[] = [];
  constructor(
    private burguersService: BurguersService,
    private categoryService: CategoriesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id');
    this.burguersService
      .getAllBurguersFromCategory(Number(categoryId))
      .subscribe((data) => {
        if (data.length > 3) {
          this.burguers = data.slice(0, 3);
          this.burguersData = data;
          return;
        }
        this.burguers = data;
      });
    this.categoryService
      .getCategoryById(Number(categoryId))
      .subscribe((data) => {
        this.category = data[0].name;
      });
  }
  showCompleteMenu() {
    this.burguers = this.burguersData;
  }
}
