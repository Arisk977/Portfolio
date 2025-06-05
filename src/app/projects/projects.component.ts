import { Component, OnDestroy, OnInit } from '@angular/core';
import { Craft } from './../interfaces/craft.interface';
import { MycraftComponent } from './mycraft/mycraft.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-projects',
  imports: [MycraftComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, OnDestroy {
  private timeoutId: any;

  constructor(private router: Router) { }
  sharkie: Craft = {
    h2: 'Sharkie',
    p: 'Jump, run and throw game based on object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the big boss.',
    img: 'assets/sharky.jpg',
    button: '2',
    routeId: 'sharkie'
  };

  daBubble: Craft = {
    h2: 'DABubble',
    p: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    img: 'assets/da-bubble.jpg',
    button: '3',
    routeId: 'daBubble'
  };

  ngOnInit(): void {
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

    const line = document.getElementById('line');

    if (line) {
      const showLine = () => {
        line.classList.remove('hide');
        line.classList.add('show');

        this.timeoutId = setTimeout(() => {
          line.classList.remove('show');
          line.classList.add('hide');
          this.timeoutId = setTimeout(showLine, 800);
        }, 3000);
      };

      showLine();
    }
  }

  onHover() {
    let button = document.getElementById('button');

    if (button) button?.classList.remove('d_none');
  }

  onLeave() {
    let button = document.getElementById('button');

    if (button) button?.classList.add('d_none');
  }

  navigateToProject(projectId: string) {
    this.router.navigate(['/project', projectId]);
  }
}
