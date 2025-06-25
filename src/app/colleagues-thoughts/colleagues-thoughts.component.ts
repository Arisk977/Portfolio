import { Component, OnInit, OnDestroy } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';
import { Feedback } from './../interfaces/feedback.interface';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-colleagues-thoughts',
  imports: [FeedbackComponent],
  templateUrl: './colleagues-thoughts.component.html',
  styleUrl: './colleagues-thoughts.component.scss'
})
export class ColleaguesThoughtsComponent implements OnInit, OnDestroy {
  private timeoutId: any;
  isGerman = false;
  constructor(private langService: LanguageService) { }

  feedback1: Feedback = {
    name: 'Tobias Lange',
    title: 'Frontend Developer',
    deu: `Aris hat das Team wirklich zusammengehalten mit seiner großartigen Organisation und klaren Kommunikation. Ohne sein Engagement wären wir nicht so weit gekommen.`,
    eng: `Aris really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.`,
    img: 'assets/feedback-card-1.png',
    mobile_img: 'assets/mobile-feedback.png'
  };

  feedback2: Feedback = {
    name: 'Maria Schäfer',
    title: 'Frontend Developer',
    deu: `Es war eine große Freude, mit Aris zusammenzuarbeiten. Er schafft es, das Team zu motivieren und zu Bestleistungen anzuspornen, dabei bringt er immer wieder kreative Ideen für neue Ansätze ein. Für das Wohlbefinden der Teammitglieder ist er stets präsent, hört aufmerksam zu und unterstützt hilfsbereit - und das alles mit einem tollen Sinn für Humor.`,
    eng: `It was a great pleasure to work with Aris. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.`,
    img: 'assets/feedback-card-2.png',
    mobile_img: 'assets/mobile-feedback-2.png'
  };

  feedback3: Feedback = {
    name: 'David Braun',
    title: 'Frontend Developer',
    deu: `Aris war ein erstklassiger Kollege im Team bei DA. Sein positives Engagement und seine Bereitschaft, Verantwortung zu übernehmen, haben maßgeblich dazu beigetragen, dass wir unsere Ziele erreicht haben.`,
    eng: `Aris was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.`,
    img: 'assets/feedback-card-1.png',
    mobile_img: 'assets/mobile-feedback.png'
  };

  ngOnInit(): void {
    this.arrowAnimation();
    this.langService.isGerman$.subscribe(value => {
      this.isGerman = value;
    });
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  arrowAnimation() {
    const blueLine = document.getElementById('blue-arrow');

    if (blueLine) {
      const showArrow = () => {
        blueLine.classList.remove('hide');
        blueLine.classList.add('show');

        this.timeoutId = setTimeout(() => {
          blueLine.classList.remove('show');
          blueLine.classList.add('hide');
          this.timeoutId = setTimeout(showArrow, 800);
        }, 3000);
      };

      showArrow();
    }
  }

}
