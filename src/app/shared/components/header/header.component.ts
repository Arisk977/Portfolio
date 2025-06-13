import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatSlideToggleModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public router: Router) {}

  navigateHome(): void {
    this.router.navigate(['/']);
  }

  isSingleProjectPage(): boolean {
    return this.router.url.includes('/project');
  }
}
