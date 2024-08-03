import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Renderer2 } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollTriggerDirective } from '../../scroll-trigger.directive';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,TranslateModule,NgIf,ScrollTriggerDirective,NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})


export class ContactComponent {    

  contactData = {
    name: "",
    email: "",
    message: "",
    acceptPolicy: false    
  }

  mailTest = true;
  mailSend = false;

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

  constructor(private http: HttpClient,private renderer: Renderer2) {    
  }

  /**
   * Submit function checking validation and sending form as body
   * @param ngForm Formular Modul of Angular
   */
  onSubmit(ngForm: NgForm) {
    ngForm.control.markAllAsTouched();
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.sendBody(ngForm);  
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {      
      this.mailSend = true;
      this.renderer.addClass(document.body, 'no-scroll');
    }
  }

  /**
   * function performing http post request
   * @param ngForm Formular Modul of Angular
   */
  sendBody(ngForm: NgForm) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => {
            ngForm.resetForm();
          },
          error: (error:string) => {
            console.error(error);
          },
          complete: () => {
            console.info('send post complete');
            this.mailSend = true;
          }
        });
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

