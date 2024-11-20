import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
export class OrderComponent {
  items = [{ id: 0, product: '', quantity: '' }];
  handleAddNewItem() {
    this.items.push({ id: this.items.length + 1, product: '', quantity: '' });
  }
  handleDeleteItem(id: number) {
    this.items = this.items.filter((i) => i.id !== id);
  }
  trackById(index: number, item: any): number {
    return item.id;
  }
}
