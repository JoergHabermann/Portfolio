import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Renderer2 } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollTriggerDirective } from '../../scroll-trigger.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    TranslateModule,
    NgIf,
    ScrollTriggerDirective,
    NgClass,
    RouterModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
    acceptPolicy: false,
  };

  mailSend = false;

  constructor(private http: HttpClient, private renderer: Renderer2) {}

  post = {
    endPoint: 'https://www.joerg-habermann.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  /**
   * Submit function checking validation and sending form as body
   * @param ngForm Formular Modul of Angular
   */
  onSubmit(ngForm: NgForm) {
    ngForm.control.markAllAsTouched();
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error: string) => {
            console.error(error);
          },
          complete: () => {            
            this.mailSend = true;
            this.renderer.addClass(document.body, 'no-scroll');
          },
        });
    }
  }

  /**
   * function to set the mailsend boolean to false, so the elements can listen and close
   * reactivating document scrolling aswell
   */
  closeinfo() {
    this.mailSend = false;
    this.renderer.removeClass(document.body, 'no-scroll');
  }
}
