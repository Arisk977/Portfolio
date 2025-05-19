import { Component } from '@angular/core';
import { FeedbackComponent } from './feedback/feedback.component';
import { Feedback } from './../interfaces/feedback.interface';

@Component({
  selector: 'app-colleagues-thoughts',
  imports: [FeedbackComponent],
  templateUrl: './colleagues-thoughts.component.html',
  styleUrl: './colleagues-thoughts.component.scss'
})
export class ColleaguesThoughtsComponent {
  feedback1: Feedback = {
    name: 'Tobias Lange',
    title: 'Frontend Developer',
    p: `Karl really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.`,
    img: './../../../assets/feedback-card-1.png'
  };

  feedback2: Feedback = {
    name: 'Maria Schäfer',
    title: 'Frontend Developer',
    p: `It was a great pleasure to work with Karl. He knows how to push and encourage team members to present the best work possible, always adding something to brainstorm. Regarding the well-being of group members, he was always present and available to listen and help others, with a great sense of humor as well.`,
    img: './../../../assets/feedback-card-2.png'
  };

  feedback3: Feedback = {
    name: 'David Braun',
    title: 'Frontend Developer',
    p: `Karl was a top team colleague at DA. His positive commitment and willingness to take on responsibility made a significant contribution to us achieving our goals.`,
    img: './../../../assets/feedback-card-1.png'
  };
}
