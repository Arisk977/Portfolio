import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@Component({
  selector: 'app-above-the-fold',
  imports: [CommonModule, HelloWorldComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {


}
