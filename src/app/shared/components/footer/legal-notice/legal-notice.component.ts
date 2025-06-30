import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../../../services/language.service';
import { Subscription } from 'rxjs';
import { HeaderComponent } from '../../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent implements OnInit, OnDestroy {
  isGerman = false;
  constructor(private langService: LanguageService) { }

  private langSub!: Subscription;

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
