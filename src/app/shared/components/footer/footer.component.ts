import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SvgComponent } from './svg/svg.component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, SvgComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  private intervalId: any;

ngOnInit(): void {
  const footerLine = document.querySelector('.footer-line');

  if (footerLine) {
    let showing = true;

    this.intervalId = setInterval(() => {
      if (showing) {
        footerLine.classList.remove('show');
        footerLine.classList.add('hide');
      } else {
        footerLine.classList.remove('hide');
        footerLine.classList.add('show');
      }

      showing = !showing;
    }, 3000);
  }
}


  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}