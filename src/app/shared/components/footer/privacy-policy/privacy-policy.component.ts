import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { LanguageService } from '../../../../services/language.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, CommonModule, FooterNavComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit, OnDestroy {
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

  private langSub!: Subscription;

  ngOnInit(): void {
    this.langService.isGerman$.subscribe(value => {
      this.isGerman = value;
    });
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  navigateTo(id:string, path:string) {
  this.router.navigate([path]).then(() => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  });
  }
}
