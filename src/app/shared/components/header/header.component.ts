import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule, CommonModule, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isGerman: boolean = false;
  lastScrollTop = 0;
  headerVisible = true;
  isMenuOpen = false;
  isMenuVisible = false;

  constructor(public router: Router, private langService: LanguageService) { }

  ngOnInit(): void {
    this.langService.isGerman$.subscribe(value => {
      this.isGerman = value;
    });
  }

    @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent): void {
    const width = (event.target as Window).innerWidth;
    if (width > 750 && this.isMenuVisible) {
      this.closeMenuOnResize();
    }
  }

   private closeMenuOnResize(): void {
    this.isMenuOpen = false;
    this.isMenuVisible = false;
  }

  toggleMenu(): void {
    if (!this.isMenuVisible) {

      this.animateMenuOpen();

      setTimeout(() => {
        this.isMenuVisible = true;
        this.isMenuOpen = true;
      }, 200);
    } else {
      this.isMenuOpen = false;
      this.isMenuVisible = false;
    }
  }


  animateMenuOpen(): void {
    const menuButton = document.getElementById('menu-button');
    const openOverlay = document.getElementById('open-overlay');

    if (menuButton && openOverlay) {
      menuButton.classList.add('blue-filter');
      openOverlay.classList.remove('d_none');

      setTimeout(() => {
        menuButton.classList.remove('blue-filter');
        openOverlay.classList.add('d_none');
      }, 1000);
    }
  }


  closeMenu(): void {
    this.isMenuOpen = false;
  }

  setLanguage(german: boolean): void {
    this.langService.setLanguage(german);
  }

  navigateHome(): void {
    this.router.navigate(['/']);
  }

  isSingleProjectPage(): boolean {
    return this.router.url.includes('/project');
  }

  isLegalNoticePage(): boolean {
    return this.router.url.includes('/legal-notice');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.headerVisible = false;
    } else {
      this.headerVisible = true;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
