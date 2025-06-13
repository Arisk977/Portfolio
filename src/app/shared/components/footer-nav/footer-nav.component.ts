import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Contact } from '../../../interfaces/contact.interface';

@Component({
  selector: 'app-footer-nav',
  imports: [CommonModule],
  templateUrl: './footer-nav.component.html',
  styleUrl: './footer-nav.component.scss'
})
export class FooterNavComponent {
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
}
