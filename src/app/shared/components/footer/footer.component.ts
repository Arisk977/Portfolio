import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { SvgComponent } from './svg/svg.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, SvgComponent, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit, OnDestroy {
  private intervalId: any;
  private timeoutId: any;
  formData = {
    name: "",
    email: "",
    message: "",
    accepted: "",
  };
  http = inject(HttpClient);
  mailTest = true;
  post = {
    endPoint: 'https://deineDomain.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  ngOnInit(): void {
    const footerLine = document.querySelector('.footer-line');
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

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }


  isFormValid(): boolean {
    return (
      !this.formData.name &&
      !this.formData.email &&
      !this.formData.message &&
      !this.formData.accepted);
  }


  onSubmit(ngForm: NgForm) {
       if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
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
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log(this.formData);
      
      ngForm.resetForm();
    }
}
}