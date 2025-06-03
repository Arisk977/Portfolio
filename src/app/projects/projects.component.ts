import { Component } from '@angular/core';
import { Craft } from './../interfaces/craft.interface';
import { MycraftComponent } from './mycraft/mycraft.component';

@Component({
  selector: 'app-projects',
  imports: [MycraftComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  sharkie: Craft = {
    h2: 'Sharkie',
    p: 'Jump, run and throw game based on object-oriented approach. Help Sharkie to find coins and poison bottles to fight against the big boss.',
    img: 'assets/sharky.jpg',
    button: '2',
    routeId: 'sharkie'
  };

  daBubble: Craft = {
    h2: 'DABubble',
    p: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    img: 'assets/da-bubble.jpg',
    button: '3',
    routeId: 'daBubble'
  };

  onHover(){
    let button = document.getElementById('button');

    if(button) button?.classList.remove('d_none');
  }

    onLeave(){
    let button = document.getElementById('button');

    if(button) button?.classList.add('d_none');
  }
}
