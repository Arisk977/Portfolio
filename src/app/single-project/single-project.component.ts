import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../interfaces/project.interface';
import { SvgComponent } from '../shared/components/footer/svg/svg.component';
import { HeaderComponent } from '../shared/components/header/header.component';

@Component({
  selector: 'app-single-project',
  imports: [CommonModule, SvgComponent, HeaderComponent],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss',
})
export class SingleProjectComponent implements OnInit, OnDestroy {
  @Input() project!: Project;
  private timeoutId: any;

  join: Project = {
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ',
    implementation: 'string',
    h1: 'Join',
    imagePath: 'assets/join-page.jpg',
    stickerPath: '<img class="sticker" src="assets/sticker.png" alt="sticker" />',
    duration: '5 weeks',
    arrowWidth: '121px',
    skills: [
      { name: 'CSS', imagePath: 'assets/skills/css.png' },
      { name: 'HTML', imagePath: 'assets/skills/html.png' },
      { name: 'Firebase', imagePath: 'assets/skills/firebase.png' },
      { name: 'Angular', imagePath: 'assets/skills/angular.png' },
      { name: 'TypeScript', imagePath: 'assets/skills/ts.png' },
    ]
  }

  sharkie: Project = {
    description: 'Jump, run and throw game based on object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the killer whale.',
    implementation: 'string',
    h1: 'Sharkie',
    imagePath: 'assets/sharky.jpg',
    stickerPath: `<app-svg class="notebook-sticker"></app-svg>`,
    duration: '3 weeks',
    arrowWidth: '240px',
    skills: [
      { name: 'JavaScript', imagePath: 'assets/skills/js.png' },
      { name: 'CSS', imagePath: 'assets/skills/css.png' },
      { name: 'HTML', imagePath: 'assets/skills/html.png' },
    ]
  }

  daBubble: Project = {
    description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    implementation: 'string',
    h1: 'DABubble',
    imagePath: 'assets/da-bubble.jpg',
    stickerPath: '<app-svg class="notebook-sticker"></app-svg>',
    duration: '4 weeks',
    arrowWidth: '308px',
    skills: [
      { name: 'JavaScript', imagePath: 'assets/skills/js.png' },
      { name: 'CSS', imagePath: 'assets/skills/css.png' },
      { name: 'HTML', imagePath: 'assets/skills/html.png' },
    ]
  }

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.loadArray(id);
    });
    this.lineAnimation();
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
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
        this.project = this.join;
        break;
      case 'sharkie':
        this.project = this.sharkie;
        break;
      case 'dabubble':
        this.project = this.daBubble;
        break;
      default:
        this.project = this.join;
    }
    this.lineAnimation();
  }

  navigateBack() {
    const projectSequence = ['join', 'sharkie', 'dabubble'];
    const current = this.project.h1.toLowerCase();
    const currentIndex = projectSequence.indexOf(current);
    const nextIndex = (currentIndex - 1 + projectSequence.length) % projectSequence.length;
    const nextProject = projectSequence[nextIndex];
    this.router.navigate(['/project', nextProject]);
  }

  navigateNextProject() {
    const projectSequence = ['join', 'sharkie', 'dabubble'];
    const current = this.project.h1.toLowerCase();
    const currentIndex = projectSequence.indexOf(current);
    const nextIndex = (currentIndex + 1) % projectSequence.length;
    const nextProject = projectSequence[nextIndex];
    this.router.navigate(['/project', nextProject]);
  }
}
