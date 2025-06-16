import { Component, Input } from '@angular/core';
import { Feedback } from '../../interfaces/feedback.interface';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback',
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
  @Input() feedback!: Feedback;
  isGerman = false;
  private langSub!: Subscription;

  constructor(private langService: LanguageService) { }

  ngOnInit(): void {
    this.langService.isGerman$.subscribe(value => {
      this.isGerman = value;
    });
  }


  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }
}
