import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { LanguageService } from '../../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  isGerman: boolean = false;
  lastScrollTop = 0;
  headerVisible = true;

  constructor(public router: Router, private langService: LanguageService) {}

  ngOnInit(): void {
    this.langService.isGerman$.subscribe(value => {
      this.isGerman = value;
    });
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
