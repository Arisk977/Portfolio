import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-frame',
  imports: [CommonModule],
  templateUrl: './image-frame.component.html',
  styleUrl: './image-frame.component.scss'
})
export class ImageFrameComponent {

   imageText = 'Aris :)';
   isHovered= false;

  onHover() {
    this.imageText ="Aris :D";
    this.isHovered = true;
  }

  onLeave() {
    this.imageText = 'Aris :)';
    this.isHovered = false;
  }
}
