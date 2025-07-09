import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Contact } from '../../../../../interfaces/contact.interface';

@Component({
  selector: 'app-footer-buttons',
  imports: [CommonModule],
  templateUrl: './footer-buttons.component.html',
  styleUrl: './footer-buttons.component.scss'
})
export class FooterButtonsComponent {
  @Input() contact!: Contact;
  isHovered = false;
  isLeaving = false;

  onHover() {
    this.isHovered = true;
    this.isLeaving = false;
  }

  onLeave() {
    this.isHovered = false;
    this.isLeaving = true;

    setTimeout(() => {
      this.isLeaving = false;
    }, 500);
  }

      navigateTo(url: string): void {
      window.open(url, '_blank');
  }
}
