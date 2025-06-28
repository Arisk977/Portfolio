import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { LanguageService } from '../../../../services/language.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit, OnDestroy {
  isGerman = false;
  private timeoutId: any;
  constructor(private langService: LanguageService,  private router: Router) { }

  private langSub!: Subscription;

  formData = {
    name: "",
    email: "",
    message: "",
    accepted: "",
  };
  http = inject(HttpClient);
  post = {
    endPoint: 'https://aris-karamat.de/Portfolio/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
      },
      responseType: 'text' as const,
    },
  };


  ngOnInit(): void {
    this.footerLineAnimation();
    this.langService.isGerman$.subscribe(value => {
      this.isGerman = value;
    });
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  isFormValid() {
    return (
      this.formData.name &&
      this.formData.email &&
      this.formData.message &&
      this.formData.accepted);
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.formData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    }
  }

  englishPrivacy(){
    return`I've read the <a class='privacy' href="#privacy-policy" (click)="goToPrivacyPolicy()">privacy policy</a> and agree to the processing of my
                data as outlined.`
  }

  germanPrivacy(){
return `Ich habe die <a class='privacy' href='#privacy-policy' (click)="goToPrivacyPolicy()">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten wie darin beschrieben zu.`
  }


   getNamePlaceholder(name: NgModel): string {
    if (!name.valid && name.touched) {
      return this.isGerman
        ? 'Oops! Es scheint, als ob dein Name fehlt.'
        : 'Oops! It seems your name is missing';
    }
    return this.isGerman ? 'Hier kommt dein Name hin' : 'Your name goes here';
  }
  
  getEmailPlaceholder(email: NgModel): string {
    if (!email.valid && email.touched) {
      return this.isGerman
        ? 'Hoppla! Deine Email wird benötigt.'
        : 'Oops! Your email is required';
    }
    return this.isGerman ? 'deineEmail@email.de' : 'youremail@email.com';
  }

 getMessagePlaceholder(message: NgModel): string {
  if (!message.valid && message.touched) {
    return this.isGerman
      ? 'Was benötigen Sie für die Entwicklung?'
      : 'What do you need to develop?';
  }
  return this.isGerman
    ? 'Hallo Lukas, ich bin interessiert an...'
    : 'Hello Lukas, I am interested in...';
}

  footerLineAnimation() {
    const footerLine = document.querySelector('.footer-line-mobile');
    if (footerLine) {
      const showFooterLine = () => {
        footerLine.classList.remove('hide');
        footerLine.classList.add('show');

        this.timeoutId = setTimeout(() => {
          footerLine.classList.remove('show');
          footerLine.classList.add('hide');

          this.timeoutId = setTimeout(showFooterLine, 400);
        }, 3000);
      };
      showFooterLine();
    }
  }

  goToPrivacyPolicy() {
  this.router.navigate(['/legal-notice']);
}
}
