import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
/* import { checkGerman } from '../portfolio/project/project.component'; */



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() burgerstatusHead:boolean = false;
  @Output() statusEvent = new EventEmitter<boolean>();

  constructor(public router: Router, private translate: TranslateService) {}

  menuSlideIn() {
    this.burgerstatusHead = true;
    this.statusEvent.emit(this.burgerstatusHead);
  }

  isMainRoute() {
    return !this.router.url.includes("/legal");
  }

  switchLanguage() {
    let language = this.translate.currentLang;
    language === 'de' ? this.translate.use('en') : this.translate.use('de');      
  }

  checkGerman() {    
    return this.translate.currentLang === 'de';
  }
}
