import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit, OnDestroy {
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
}
