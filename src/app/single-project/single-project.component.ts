import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../interfaces/project.interface';

@Component({
  selector: 'app-single-project',
  imports: [CommonModule],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {
  @Input() project!:Project;
constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      switch (id) {
        case 'join':
          this.project = this.join;
          break;
        case 'sharkie':
          this.project = this.sharkie;
          break;
        case 'daBubble':
          this.project = this.daBubble;
          break;
        default:
          this.project = this.join;
      }
    });
  }

join: Project={
   description: 'string',
    implementation: 'string',
    h1: 'string',
    imagePath: 'assets/join-page.jpg',
    stickerPath: 'assets/sticker.png', 
    duration: 'string',
    skills: [
  { name: 'CSS', imagePath: 'assets/skills/css.png' },
  { name: 'HTML', imagePath: 'assets/skills/html.png' },
  { name: 'Firebase', imagePath: 'assets/skills/firebase.png' },
  { name: 'Angular', imagePath: 'assets/skills/angular.png' },
  { name: 'TypeScript', imagePath: 'assets/skills/ts.png' },
]  
}

sharkie: Project={
   description: 'string',
    implementation: 'string',
    h1: 'string',
    imagePath: 'assets/sharky.jpg',
    stickerPath: 'assets/sticker.png', 
    duration: 'string',
    skills: [
  { name: 'CSS', imagePath: 'assets/skills/css.png' },
  { name: 'HTML', imagePath: 'assets/skills/html.png' },
  { name: 'Firebase', imagePath: 'assets/skills/firebase.png' },
  { name: 'Angular', imagePath: 'assets/skills/angular.png' },
  { name: 'TypeScript', imagePath: 'assets/skills/ts.png' },
]  
}

daBubble: Project={
   description: 'string',
    implementation: 'string',
    h1: 'string',
    imagePath: 'assets/da-bubble.jpg',
    stickerPath: 'assets/sticker.png', 
    duration: 'string',
    skills: [
  { name: 'CSS', imagePath: 'assets/skills/css.png' },
  { name: 'HTML', imagePath: 'assets/skills/html.png' },
  { name: 'Firebase', imagePath: 'assets/skills/firebase.png' },
  { name: 'Angular', imagePath: 'assets/skills/angular.png' },
  { name: 'TypeScript', imagePath: 'assets/skills/ts.png' },
]  
}

}
