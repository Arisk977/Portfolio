import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SvgComponent } from './svg/svg.component';
import { FormComponent } from './form/form.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { LanguageService } from '../../../services/language.service';
import { Router } from '@angular/router';

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
  isGerman = false;
  emailWasSent = false;


  constructor(private langService: LanguageService, private router: Router) { }
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

  onSendComplete() {
    this.emailWasSent = true;
    let overlayRef= document.getElementById('mail-sent');
    overlayRef?.classList.remove('hidden');
    setTimeout(() => {
      this.emailWasSent = false;
    }, 2000);
  }


  scrollToHeader() {
    const element = document.getElementById("head");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

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

  englishText() {
    return `I'm always open to exciting new opportunities — whether it's joining a motivated team, contributing to a fresh
            project, or taking on a freelance challenge.
            With a strong foundation in front-end development and a drive to keep improving, I'm confident in my ability
            to make a meaningful impact through clean code, creative problem-solving, and collaboration.
            <br><br>
            If you're looking for someone who's reliable, adaptable, and genuinely passionate about building
            user-focused applications, feel free to reach out. I'd love to hear more about your project or team!`
  }

  germanText() {
    return `Ich bin stets offen für spannende neue Möglichkeiten - sei es als Teil eines motivierten Teams, in einem frischen Projekt oder im Rahmen einer freiberuflichen Zusammenarbeit.
Mit einem soliden Fundament in der Frontend-Entwicklung und dem Antrieb, mich kontinuierlich weiterzuentwickeln, bin ich überzeugt davon, durch sauberen Code, kreatives Problemlösen und Teamarbeit einen echten Mehrwert leisten zu können.
<br><br>
Wenn Sie auf der Suche nach jemandem sind, der zuverlässig, anpassungsfähig und mit echter Leidenschaft benutzerorientierte Anwendungen entwickelt - schreiben Sie mir gerne. Ich freue mich darauf, mehr über Ihr Projekt oder Team zu erfahren!`
  }

  goToPrivacyPolicy() {
    this.router.navigate(['/privacy-policy']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

    goToLegalNotice() {
    this.router.navigate(['/legal-notice']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }


}