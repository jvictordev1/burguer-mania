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
  items = [{ product: '', quantity: '' }];
  handleAddNewItem() {
    this.items.push({ product: '', quantity: '' });
  }
  handleDeleteItem(index: number) {
    this.items.splice(index, 1);
  }
  trackByIndex(index: number): number {
    return index;
  }
}
