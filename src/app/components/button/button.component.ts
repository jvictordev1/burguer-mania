import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input({ required: true }) text = '';
  @Input() href = '';
  @Input() variant = 'primary';
  @Input() disabled = false;
  @Input() type = 'button';
}
