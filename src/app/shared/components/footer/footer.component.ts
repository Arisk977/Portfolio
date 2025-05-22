import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SvgComponent } from './svg/svg.component';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, SvgComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
