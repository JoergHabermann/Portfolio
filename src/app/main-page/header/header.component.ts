import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,TranslateModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() burgerstatusHead:boolean = false;
  @Output() statusEvent = new EventEmitter<boolean>();

  constructor(public router: Router, private translate: TranslateService) {}

  /**
   * function to set the burgerstatus boolean to true, so the elements can listen and open menu
   */
  menuSlideIn() {
    this.burgerstatusHead = true;
    this.statusEvent.emit(this.burgerstatusHead);
  }

  /**
   * function to check if the current route contains legal
   * @returns true if current route is not legal
   */
  isMainRoute() {
    return !this.router.url.includes("/legal");
  }

  /**
   * function to switch languages via ternary operator
   */
  switchLanguage() {
    let language = this.translate.currentLang;
    language === 'de' ? this.translate.use('en') : this.translate.use('de');      
  }

  /**
   * function checking if current language is german
   * @returns true if current language is german
   */
  checkGerman() {    
    return this.translate.currentLang === 'de';
  }
}
