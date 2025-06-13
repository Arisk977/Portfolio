import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SvgComponent } from './svg/svg.component';
import { FormComponent } from './form/form.component';
import { FooterNavComponent } from '../footer-nav/footer-nav.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SvgComponent, FormComponent, FooterNavComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  private intervalId: any;
  private timeoutId: any;

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

  scrollToHeader() {
  const element = document.getElementById("topHeader");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}


  ngOnInit(): void {
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
}