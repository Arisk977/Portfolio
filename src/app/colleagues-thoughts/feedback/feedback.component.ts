import { Component, Input } from '@angular/core';
import { Feedback } from '../../interfaces/feedback.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {
@Input() feedback!: Feedback;
}
