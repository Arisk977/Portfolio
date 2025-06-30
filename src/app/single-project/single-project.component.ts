import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../interfaces/project.interface';
import { SvgComponent } from '../shared/components/footer/svg/svg.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-project',
  imports: [CommonModule, SvgComponent, HeaderComponent],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent implements OnInit, OnDestroy {
  @Input() project!: Project;
  private timeoutId: any;
  isGerman = false;
  headerVisible = true;
  lastScrollTop = 0;

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
      case 'daBubble':
        this.project = this.daBubble;
        break;
      default:
        this.isGerman ? this.project = this.joinDeu : this.project = this.joinEng;
    }
    this.lineAnimation();
  }

  navigateBack() {
    const projectSequence = ['join', 'sharkie', 'daBubble'];
    const current = this.project.h1.toLowerCase();
    const currentIndex = projectSequence.indexOf(current);
    const nextIndex = (currentIndex - 1 + projectSequence.length) % projectSequence.length;
    const nextProject = projectSequence[nextIndex];
    this.router.navigate(['/project', nextProject]);
  }

  navigateNextProject() {
    const projectSequence = ['join', 'sharkie', 'daBubble'];
    const current = this.project.h1.toLowerCase();
    const currentIndex = projectSequence.indexOf(current);
    const nextIndex = (currentIndex + 1) % projectSequence.length;
    const nextProject = projectSequence[nextIndex];
    this.router.navigate(['/project', nextProject]);
  }

  navigateTo(url: string): void {
    window.location.href = url;
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
