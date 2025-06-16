import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hello-world',
  imports: [CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent implements OnInit, OnDestroy{
  isHovered = false;
  isLeaving = false;
  isGerman = false;
  buttonText = 'Hello World';
  private langSub!: Subscription;

  constructor(private langService: LanguageService) { }

   ngOnInit(): void {
     this.langService.isGerman$.subscribe(value => {
          this.isGerman = value;
          this.buttonText = this.isGerman ? 'Hallo Welt' : 'Hello World';
        });
  }


   ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  onHover() {
    this.buttonText = this.isGerman ? 'ICH BIN ARIS KARAMAT' : "I'M ARIS KARAMAT";
    this.isHovered = true;
    this.isLeaving = false;
  }

  onLeave() {
    this.buttonText = this.isGerman ? 'Hallo Welt' : 'Hello World';
    this.isHovered = false;
    this.isLeaving = true;

    setTimeout(() => {
      this.isLeaving = false;
    }, 500);
  }
}
