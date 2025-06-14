import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private isGermanSubject = new BehaviorSubject<boolean>(false);
  isGerman$ = this.isGermanSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('isGerman') === 'true';
    this.isGermanSubject.next(saved);
  }

  setLanguage(german: boolean): void {
    this.isGermanSubject.next(german);
    localStorage.setItem('isGerman', String(german));
  }

  getCurrentLanguage(): boolean {
    return this.isGermanSubject.value;
  }
}
