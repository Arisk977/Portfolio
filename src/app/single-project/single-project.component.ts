import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../interfaces/project.interface';
import { SvgComponent } from '../shared/components/footer/svg/svg.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';
import { FooterNavComponent } from '../shared/components/footer/footer-nav/footer-nav.component';

@Component({
  selector: 'app-single-project',
  imports: [CommonModule, SvgComponent, HeaderComponent, FooterNavComponent],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent implements OnInit, OnDestroy {
  @Input() project!: Project;
  private timeoutId: any;
  isGerman = false;
  headerVisible = true;
  lastScrollTop = 0;

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

  private langSub!: Subscription;

  joinEng: Project = {
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    implementation: `In the group project “Join,” we developed a registration and login system, a summary section, and a responsive design using JavaScript and Firebase.<br> I independently implemented solutions following clean code principles. Through close team collaboration, including code reviews and joint problem-solving, we optimized the development process. Project coordination was structured via GitHub with regular commits. <br><br>This project significantly enhanced my ability to work independently as well as collaboratively and adaptively within a team.`,
    h1: 'Join',
    imagePath: 'assets/join-page.jpg',
    stickerPath: '<img class="sticker" src="assets/sticker.png" alt="sticker" />',
    duration: '5 weeks',
    arrowWidth: '121px',
    skills: [
      { name: 'JavaScript', imagePath: 'assets/skills/js.png' },
      { name: 'CSS', imagePath: 'assets/skills/css.png' },
      { name: 'HTML', imagePath: 'assets/skills/html.png' },
      { name: 'Firebase', imagePath: 'assets/skills/firebase.png' },
    ],
    git: 'https://github.com/Arisk977/Join',
    live: 'https://aris-karamat.de/Join/index.html',

  }

  joinDeu: Project = {
    description: 'Task-Manager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mithilfe von Drag-and-Drop-Funktionen, weise Benutzer und Kategorien zu.',
    implementation: `Im Gruppenprojekt „Join“ entwickelten wir mit JavaScript und Firebase ein Registrierungs- und Login-System, eine Summary Section sowie ein responsives Design. Dabei implementierte ich eigenverantwortlich Lösungen unter Berücksichtigung von Clean-Code-Prinzipien. Durch die enge Zusammenarbeit im Team, inklusive Code-Reviews und gemeinsamer Problemlösung, optimierten wir den Entwicklungsprozess. Die Projektkoordination erfolgte strukturiert über GitHub mit regelmäßigen Commits. <br> <br> Dieses Projekt hat meine Fähigkeiten in selbstständiger Entwicklung sowie teamorientierter und flexibler Arbeitsweise nachhaltig gestärkt.`,
    h1: 'Join',
    imagePath: 'assets/join-page.jpg',
    stickerPath: '<img class="sticker" src="assets/sticker.png" alt="sticker"/>',
    duration: '5 Wochen',
    arrowWidth: '121px',
    skills: [
      { name: 'JavaScript', imagePath: 'assets/skills/js.png' },
      { name: 'CSS', imagePath: 'assets/skills/css.png' },
      { name: 'HTML', imagePath: 'assets/skills/html.png' },
      { name: 'Firebase', imagePath: 'assets/skills/firebase.png' },
    ],
    git: 'https://github.com/Arisk977/Join',
    live: 'https://aris-karamat.de/Join/index.html',
  }

  sharkieDeu: Project = {
    description: `Jump, Run und Throw-Spiel basierend auf einem objektorientierten Ansatz. Hilf Sharkie, Münzen und Giftflaschen zu finden, um gegen den Schwertwal zu kämpfen.`,
    implementation: 'Das Projekt habe ich eigenständig mit JavaScript und Canvas umgesetzt. Dabei vertiefte ich mein Verständnis der objektorientierten Programmierung durch die Entwicklung zahlreicher Klassen, etwa für den Charakter, den Endboss, Gegner und Sammelobjekte wie Münzen. Zusätzlich optimierte ich die Performance und Struktur des Codes, um eine flüssige Spielerfahrung sicherzustellen. <br> <br> Dieses Projekt demonstriert meine Fähigkeit, komplexe Anwendungen modular und wartbar zu gestalten - eine Kompetenz, die ich gezielt in professionelle Entwicklungsumgebungen einbringe.',
    h1: 'Sharkie',
    imagePath: 'assets/sharky.jpg',
    stickerPath: `<app-svg class="notebook-sticker"></app-svg>`,
    duration: '3 weeks',
    arrowWidth: '240px',
    skills: [
      { name: 'JavaScript', imagePath: 'assets/skills/js.png' },
      { name: 'CSS', imagePath: 'assets/skills/css.png' },
      { name: 'HTML', imagePath: 'assets/skills/html.png' },
    ],
    git: 'https://github.com/Arisk977/Sharkie',
    live: 'https://aris-karamat.de/Sharkie/index.html',
  }

  sharkieEng: Project = {
    description: 'Jump, run and throw game based on object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the killer whale.',
    implementation: 'I developed the project independently using JavaScript and Canvas. In doing so, I deepened my understanding of object-oriented programming by creating numerous classes, such as for the character, end boss, enemies, and collectible coins. Additionally, I optimized code performance and structure to ensure smooth gameplay. <br> <br> This project demonstrates my ability to build complex applications in a modular and maintainable way — skills I am eager to apply in professional development environments.',
    h1: 'Sharkie',
    imagePath: 'assets/sharky.jpg',
    stickerPath: `<app-svg class="notebook-sticker"></app-svg>`,
    duration: '3 weeks',
    arrowWidth: '240px',
    skills: [
      { name: 'JavaScript', imagePath: 'assets/skills/js.png' },
      { name: 'CSS', imagePath: 'assets/skills/css.png' },
      { name: 'HTML', imagePath: 'assets/skills/html.png' },
    ],
    git: 'https://github.com/Arisk977/Sharkie',
    live: 'https://aris-karamat.de/Sharkie/index.html',
  }

    bestellAppEng: Project = {
    description: 'This is a self-developed food ordering app. Users can browse and add various dishes to a shopping cart. The cart automatically calculates and displays the total number of items selected. However, placing or completing an actual order is not possible - the app is intended purely as a demonstration of the ordering and cart functionality.',
    implementation: `The app is a front-end project built with HTML, CSS, and JavaScript. Users can add dishes to a cart, which updates in real time to show item counts. The cart state is managed using JavaScript and saved in the browser's local storage to preserve data between sessions. There is no backend or order processing - the focus is on demonstrating interactive cart functionality.`,
    h1: 'Bestell-App',
    imagePath: 'assets/bestell-app.jpg',
    stickerPath: '<app-svg class="notebook-sticker"></app-svg>',
    duration: '1 week',
    arrowWidth: '308px',
    skills: [
      { name: 'CSS', imagePath: 'assets/skills/css.png' },
      { name: 'HTML', imagePath: 'assets/skills/html.png' },
      { name: 'JavaScript', imagePath: 'assets/skills/js.png' },
    ],
    git: 'https://github.com/Arisk977/Bestellapp',
    live: 'https://aris-karamat.de/Bestellapp/index.html',
  }

      bestellAppDeu: Project = {
    description: 'Diese Webseite ist eine selbst entwickelte Bestell-App für Speisen. Nutzer können verschiedene Gerichte auswählen und in einen Warenkorb legen. Der Warenkorb zählt automatisch die Anzahl der hinzugefügten Produkte und zeigt diese übersichtlich an. Eine tatsächliche Bestellung oder Bezahlung ist jedoch nicht möglich - die App dient lediglich zur Demonstration der Bestell- und Warenkorbfunktionalität.',
    implementation: 'Die App ist ein Frontend-Projekt, entwickelt mit HTML, CSS und JavaScript. Nutzer können Gerichte in einen Warenkorb legen, der sich in Echtzeit aktualisiert und die Artikelanzahl anzeigt. Der Zustand des Warenkorbs wird mit JavaScript verwaltet und im Local Storage des Browsers gespeichert, sodass die Daten zwischen den Sitzungen erhalten bleiben. Es gibt kein Backend und keine Bestellabwicklung - der Fokus liegt auf der Demonstration der interaktiven Warenkorbfunktion.',
    h1: 'Bestell-App',
    imagePath: 'assets/bestell-app.jpg',
    stickerPath: '<app-svg class="notebook-sticker"></app-svg>',
    duration: '1 week',
    arrowWidth: '308px',
    skills: [
      { name: 'CSS', imagePath: 'assets/skills/css.png' },
      { name: 'HTML', imagePath: 'assets/skills/html.png' },
      { name: 'JavaScript', imagePath: 'assets/skills/js.png' },
    ],
    git: 'https://github.com/Arisk977/Bestellapp',
    live: 'https://aris-karamat.de/Bestellapp/index.html',
  }

  daBubble: Project = {
    description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    implementation: 'in progress',
    h1: 'DABubble',
    imagePath: 'assets/da-bubble.jpg',
    stickerPath: '<app-svg class="notebook-sticker"></app-svg>',
    duration: '4 weeks',
    arrowWidth: '308px',
    skills: [
      { name: 'CSS', imagePath: 'assets/skills/css.png' },
      { name: 'HTML', imagePath: 'assets/skills/html.png' },
      { name: 'Angular', imagePath: 'assets/skills/angular.png' },
      { name: 'TypeScript', imagePath: 'assets/skills/ts.png' },
    ],
    git: '',
    live: '',
  }

  constructor(private route: ActivatedRoute, private router: Router, private langService: LanguageService) { }

  ngOnInit(): void {
    this.langService.isGerman$.subscribe(value => {
      this.isGerman = value;

      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        this.loadArray(id);
      });
    });
    this.lineAnimation();

  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  lineAnimation() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    const blueLine = document.getElementById('blue-line');

    if (blueLine) {
      const showLine = () => {
        blueLine.classList.remove('hide');
        blueLine.classList.add('show');

        this.timeoutId = setTimeout(() => {
          blueLine.classList.remove('show');
          blueLine.classList.add('hide');
          this.timeoutId = setTimeout(showLine, 800);
        }, 3000);
      };

      showLine();
    }
  }

  loadArray(id: string | null) {
    switch (id) {
      case 'join':
        this.isGerman ? this.project = this.joinDeu : this.project = this.joinEng;
        break;
      case 'sharkie':
        this.isGerman ? this.project = this.sharkieDeu : this.project = this.sharkieEng;
        break;
      case 'bestellApp':
        this.isGerman ? this.project = this.bestellAppDeu : this.project = this.bestellAppEng;
        break;
      default:
        this.isGerman ? this.project = this.joinDeu : this.project = this.joinEng;
    }
    this.lineAnimation();
  }

  navigateBack() {
    const projectSequence = ['join', 'sharkie', 'bestellApp'];
    const current = this.project.h1.toLowerCase();
    const currentIndex = projectSequence.indexOf(current);
    const nextIndex = (currentIndex - 1 + projectSequence.length) % projectSequence.length;
    const nextProject = projectSequence[nextIndex];
    this.router.navigate(['/project', nextProject]);
  }

  navigateNextProject() {
    const projectSequence = ['join', 'sharkie', 'bestellApp'];
    const current = this.project.h1.toLowerCase();
    const currentIndex = projectSequence.indexOf(current);
    const nextIndex = (currentIndex + 1) % projectSequence.length;
    const nextProject = projectSequence[nextIndex];
    this.router.navigate(['/project', nextProject]);
  }

  navigateToURL(url: string): void {
    window.open(url, '_blank');
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

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('scroll detected in MainComponent');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.headerVisible = false;
    } else {
      this.headerVisible = true;
    }
    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }
}
