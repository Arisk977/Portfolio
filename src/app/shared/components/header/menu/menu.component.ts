import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../../../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

isGerman: boolean = false;
  lastScrollTop = 0;
  headerVisible = true;
  @Output() closeMenu = new EventEmitter<void>();

  constructor(public router: Router, private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.isGerman$.subscribe(value => {
      this.isGerman = value;
    });
  }

 handleCloseClick(): void {
  this.animateMenuClose();
 setTimeout(() => {
       this.closeMenu.emit();
      }, 200);
  
}

animateMenuClose(): void {
  const closeMenu = document.getElementById('close-menu');
  const closeOverlay = document.getElementById('close-overlay');

  if (closeMenu && closeOverlay) {
    closeMenu.classList.add('blue-filter');
    closeOverlay.classList.remove('d_none');

    setTimeout(() => {
      closeMenu.classList.remove('blue-filter');
      closeOverlay.classList.add('d_none');
    }, 1000);
  }
}


  setLanguage(german: boolean): void {
    this.langService.setLanguage(german);
  }

  navigateHome(): void {
    this.router.navigate(['/']);
  }
    onHover(event: MouseEvent) {
    const target = (event.currentTarget as HTMLElement);
    target.classList.remove('unhovered');
    target.classList.add('hovered');
  }

  onLeave(event: MouseEvent) {
    const target = (event.currentTarget as HTMLElement);
    target.classList.remove('hovered');
    target.classList.add('unhovered');
  }

  scrollToContact() {
    const element = document.getElementById("contact-page");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

    navigateTo(url: string): void {
    window.location.href = url;
  }
}

