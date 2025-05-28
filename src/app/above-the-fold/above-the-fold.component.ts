import { Component } from '@angular/core';

@Component({
  selector: 'app-above-the-fold',
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

    buttonText = 'Hello World';

 onHover() {
  this.buttonText = "I'M ARIS KARAMAT";
  document.getElementById('waving-hand')?.classList.add('rotateAnimation');
}


  onLeave() {
    this.buttonText = 'Hello World';
  }
}
