import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-skill-set',
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent implements OnInit, OnDestroy {
  private timeoutId: any;
  clicked: boolean = false;
   isGerman = false;
  
    constructor(private langService: LanguageService) {}

  ngOnInit(): void {
    this.lineAnimation();
     this.langService.isGerman$.subscribe(value => {
        this.isGerman = value;
      });
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

    const circleLine = document.getElementById('circle-line');

    if (circleLine) {
      const showLine = () => {
        circleLine.classList.remove('hide');
        circleLine.classList.add('show');

        this.timeoutId = setTimeout(() => {
          circleLine.classList.remove('show');
          circleLine.classList.add('hide');
          this.timeoutId = setTimeout(showLine, 800);
        }, 3000);
      };

      showLine();
    }
  }



  onHover() {
    if (!this.clicked) {
      let hoverImageRef = document.getElementById('hover-image');
      let textRef = document.getElementById('pull-text');
      let bgImageRef = document.getElementById('bg-image');

      hoverImageRef?.classList.remove('d_none');
      textRef?.classList.add('d_none');
      bgImageRef?.classList.add('d_none');
    }
  }

  onLeave() {
    if (!this.clicked) {
      let hoverImageRef = document.getElementById('hover-image');
      let textRef = document.getElementById('pull-text');
      let bgImageRef = document.getElementById('bg-image');

      hoverImageRef?.classList.add('d_none');
      textRef?.classList.remove('d_none');
      bgImageRef?.classList.remove('d_none');
    }
  }

  showOtherSkills() {
    this.clicked = true;
    let hoverImageRef = document.getElementById('hover-image');
    let textRef = document.getElementById('pull-text');
    let bgImageRef = document.getElementById('bg-image');
    let clickImageRef = document.getElementById('click-image');

    hoverImageRef?.classList.add('d_none');
    textRef?.classList.add('d_none');
    bgImageRef?.classList.add('d_none');
    clickImageRef?.classList.remove('d_none');
  }

  englishText(){
    return 'I am always eager to learn and adapt to new tools and approaches, as I know how quickly web development evolves. Staying up to date with the latest trends and best practices is essential to me, and I enjoy continuously expanding my skill set to create modern, user-friendly web applications.'
  }

  germanText(){
    return 'Ich bin stets motiviert, neue Tools und Ansätze zu erlernen und mich anzupassen, da ich weiß, wie schnell sich die Webentwicklung weiterentwickelt. Auf dem neuesten Stand der Trends und Best Practices zu bleiben, ist für mich essenziell, und ich habe Freude daran, meine Fähigkeiten kontinuierlich zu erweitern, um moderne, benutzerfreundliche Webanwendungen zu erstellen.'
  }

}
