import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  imports: [CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent {
  buttonText = 'Hello World';
  isHovered = false;
  isLeaving = false;

  onHover() {
    this.buttonText = "I'M ARIS KARAMAT";
    this.isHovered = true;
    this.isLeaving = false;
  }

  onLeave() {
    this.buttonText = 'Hello World';
    this.isHovered = false;
    this.isLeaving = true;

    setTimeout(() => {
      this.isLeaving = false;
    }, 500);
  }
}
