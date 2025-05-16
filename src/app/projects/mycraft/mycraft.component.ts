import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Craft } from '../../interfaces/craft.interface';

@Component({
  selector: 'app-mycraft',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mycraft.component.html',
  styleUrl: './mycraft.component.scss'
})
export class MycraftComponent {
  @Input() craft!:Craft;

}
