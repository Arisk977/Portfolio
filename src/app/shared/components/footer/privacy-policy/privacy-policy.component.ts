import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { LanguageService } from '../../../../services/language.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  imports: [HeaderComponent, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
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
