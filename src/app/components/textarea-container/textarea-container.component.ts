import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-textarea-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './textarea-container.component.html',
  styleUrl: './textarea-container.component.css',
})
export class TextareaContainerComponent {
  @Input({ required: true }) name = '';
  @Input({ required: true }) label = '';
  @Input() placeholder = '';
  @Input() value = '';
  @Input() required = 'false';
}
