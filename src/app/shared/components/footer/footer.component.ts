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
  private timeoutId: any;

 ngOnInit(): void {
  const footerLine = document.querySelector('.footer-line');

  if (footerLine) {
    const showFooterLine = () => {
      footerLine.classList.remove('hide');
      footerLine.classList.add('show');

      this.timeoutId = setTimeout(() => {
        footerLine.classList.remove('show');
        footerLine.classList.add('hide');

        this.timeoutId = setTimeout(showFooterLine, 400);
      }, 3000);
    };

    showFooterLine();
  }
}

ngOnDestroy(): void {
  if (this.timeoutId) {
    clearTimeout(this.timeoutId);
  }
}
}