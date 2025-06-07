import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent implements OnInit, OnDestroy {
 private timeoutId: any;
 clicked: boolean = false;

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



onHover(){
  // Nur reagieren, wenn NICHT geklickt wurde
  if (!this.clicked) {
    let hoverImageRef = document.getElementById('hover-image');
    let textRef = document.getElementById('pull-text');
    let bgImageRef = document.getElementById('bg-image');

    hoverImageRef?.classList.remove('d_none');
    textRef?.classList.add('d_none');
    bgImageRef?.classList.add('d_none');
  }
}

onLeave(){
  // Nur reagieren, wenn NICHT geklickt wurde
  if (!this.clicked) {
    let hoverImageRef = document.getElementById('hover-image');
    let textRef = document.getElementById('pull-text');
    let bgImageRef = document.getElementById('bg-image');

    hoverImageRef?.classList.add('d_none');
    textRef?.classList.remove('d_none');
    bgImageRef?.classList.remove('d_none');
  }
}

showOtherSkills(){
  // Klick-Status setzen
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

}
