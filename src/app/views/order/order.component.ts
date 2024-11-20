import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { ButtonComponent } from '../../components/button/button.component';
import { InputContainerComponent } from '../../components/input-container/input-container.component';
import { TextareaContainerComponent } from '../../components/textarea-container/textarea-container.component';
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
})
export class OrderComponent implements OnInit {
  order = {
    items: [
      {
        id: uuidv4(),
        product: '',
        quantity: '',
      },
    ],
    observation: '',
  };
  orderBurguer: string = '';
  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const param = params.get('burguer');
      if (param) {
        this.orderBurguer = param;
        this.order.items[0].product = param; // Assign programmatically
        this.cdr.detectChanges(); // Notify Angular of changes
      }
    });
  }
  handleAddNewItem() {
    this.order.items.push({
      id: uuidv4(),
      product: '',
      quantity: '',
    });
  }
  handleDeleteItem(id: string) {
    this.order.items = this.order.items.filter((i) => i.id !== id);
  }
  handleOrderSubmit(form: any) {
    form.valid ? console.log(this.order) : console.log('invalid');
  }
  trackById(index: number, item: any): number {
    return item.id;
  }
}
