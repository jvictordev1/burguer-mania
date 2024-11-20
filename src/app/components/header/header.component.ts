import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '/src/styles.css'],
})
export class HeaderComponent {
  hidden = true;
  handleMenuClick() {
    this.hidden = !this.hidden;
  }
}
