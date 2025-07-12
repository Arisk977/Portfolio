import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterButtonsComponent } from './footer-buttons/footer-buttons.component';
import { LanguageService } from '../../../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer-nav',
  standalone: true,
  imports: [CommonModule, FooterButtonsComponent],
  templateUrl: './footer-nav.component.html',
  styleUrl: './footer-nav.component.scss'
})
export class FooterNavComponent {
  private intervalId: any;
  private timeoutId: any;
  isGerman = false;

  email = {
    name: 'Email',
    img: 'assets/mail-footer.png',
    href: 'mailto:karamataris@gmail.com',
  };

  linkedIn = {
    name: 'LinkedIn',
    img: 'assets/linkedin-footer.png',
    href: 'https://www.linkedin.com/in/aris-karamat/',
  };

  github = {
    name: 'GitHub',
    img: 'assets/skills/Github.png',
    href: 'https://github.com/Arisk977',
  };

  constructor(private langService: LanguageService, private router: Router) { }

  ngOnInit(): void {
    this.footerLineAnimation();
    this.langService.isGerman$.subscribe(value => {
      this.isGerman = value;
    });
  }

  footerLineAnimation() {
    const footerLine = document.querySelector('.footer-line');
    if (footerLine) {
      const showFooterLine = () => {
        footerLine.classList.remove('hide');
        footerLine.classList.add('show');

        this.timeoutId = setTimeout(() => {
          footerLine.classList.remove('show');
          footerLine.classList.add('hide');

          this.timeoutId = setTimeout(showFooterLine, 400);
        }, 3000);
      };
      showFooterLine();
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }



  navigateTo(id: string, path: string) {
    this.router.navigate([path]).then(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })});
  }
}
