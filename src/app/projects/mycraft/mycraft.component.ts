import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Craft } from '../../interfaces/craft.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycraft',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mycraft.component.html',
  styleUrl: './mycraft.component.scss'
})
export class MycraftComponent {
  @Input() craft!:Craft;
  constructor(private router: Router) {}
   onHover(){
    let button = document.getElementById(`button-${this.craft.button}`);

    if(button) button?.classList.remove('d_none');
  }

    onLeave(){
    let button = document.getElementById(`button-${this.craft.button}`);

    if(button) button?.classList.add('d_none');
  }

    navigateToProject(projectId: string) {
      this.router.navigate(['/project', projectId]);
  }
}
