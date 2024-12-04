import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input({ required: true }) title = '';
  @Input({ required: true }) ingredients = '';
  @Input() price: number | null = null;
  @Input() hover = true;
  @Input({ required: true }) pathImage = '';
}
