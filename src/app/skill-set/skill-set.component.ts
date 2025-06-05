import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  imports: [],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent implements OnInit, OnDestroy {
 private timeoutId: any;

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
}
