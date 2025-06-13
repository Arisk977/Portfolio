import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ImageFrameComponent } from './image-frame/image-frame.component';

@Component({
  selector: 'app-above-the-fold',
  imports: [CommonModule, HelloWorldComponent, ImageFrameComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
 onHover(event: MouseEvent) {
  const target = (event.currentTarget as HTMLElement);
  target.classList.remove('unhovered');
  target.classList.add('hovered');
}

onLeave(event: MouseEvent) {
  const target = (event.currentTarget as HTMLElement);
  target.classList.remove('hovered');
  target.classList.add('unhovered');
}

 scrollToContact() {
  const element = document.getElementById("contact-page");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
}
