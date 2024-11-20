import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { IBurguers } from '../../models/Burgers';
import { BurguersService } from '../../services/burguers.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ButtonComponent, CardComponent, CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  providers: [BurguersService],
})
export class DetailComponent implements OnInit {
  burguer: IBurguers = {
    id: 0,
    categoryId: 0,
    name: '',
    ingredients: '',
    description: '',
    price: 0,
  };
  constructor(
    private burguersService: BurguersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const burguerId = this.route.snapshot.paramMap.get('id');
    this.burguersService
      .getBurguerFromId(Number(burguerId))
      .subscribe((data) => {
        if (data.length) {
          this.burguer = data[0];
          return;
        }
      });
  }
  handleBuyItemClick(burguer: string) {
    this.router.navigate(['order'], {
      queryParams: { burguer: burguer },
    });
  }
}
