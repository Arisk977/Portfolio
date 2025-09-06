import { Component, HostListener, Input } from '@angular/core';
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
  isMobile = false;

  constructor(private langService: LanguageService) { }

  ngOnInit(): void {
    this.langService.isGerman$.subscribe(value => {
      this.isGerman = value;
    });
    this.updateDeviceType();
  }


  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    this.updateDeviceType();
  }

  updateDeviceType() {
    this.isMobile = window.innerWidth <= 750;
  }
get backgroundImage(): string {
  const imgPath = this.isMobile ? this.feedback.mobile_img : this.feedback.img;
  return `url('${imgPath}')`;
}

navigateTo(url: string): void {
    window.open(url, '_blank');
  }

}

