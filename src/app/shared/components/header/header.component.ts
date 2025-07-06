import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../../services/language.service';
import { MenuComponent } from './menu/menu.component';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule, CommonModule, MenuComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isGerman: boolean = false;
  isMenuOpen = false;
  isMenuVisible = false;
  @Input() headerVisible: boolean = true;

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
    setTimeout(() => {
      this.isMenuVisible = false;
    }, 300)
    
  }

  setLanguage(german: boolean): void {
    this.langService.setLanguage(german);
  }

  navigateHome(): void {
    this.router.navigate(['/']);
  }

   goToPrivacyPolicy() {
  this.router.navigate(['/privacy-policy']).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

navigateTo(id: string) {
  this.router.navigate(['/']).then(() => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  });
}

  isSingleProjectPage(): boolean {
    return this.router.url.includes('/project');
  }

  isLegalNoticePage(): boolean {
    return this.router.url.includes('/legal-notice');
  }

   isPrivacyPolicyPage(): boolean {
    return this.router.url.includes('/privacy-policy');
  }
}
