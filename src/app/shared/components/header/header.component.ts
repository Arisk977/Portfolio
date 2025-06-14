import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  constructor(public router: Router, private langService: LanguageService) {
  
   }

  ngOnInit(): void {
     this.langService.isGerman$.subscribe(value => {
      this.isGerman = value;
    });
  }

  setLanguage(german: boolean): void {
    this.isGerman = german;
    localStorage.setItem('isGerman', String(this.isGerman));
  }
  navigateHome(): void {
    this.router.navigate(['/']);
  }

  isSingleProjectPage(): boolean {
    return this.router.url.includes('/project');
  }
}
