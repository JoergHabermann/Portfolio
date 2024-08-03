import { CommonModule, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule,TranslateModule,NgStyle],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {

  language:string;
  /**
   * setting language variable of component to current language from TranslateService Module
   * subscribing to the language change aswell
   * @param translate TranslateService used in the component
   */
  constructor (translate : TranslateService) {
    this.language = translate.currentLang;

    translate.onLangChange.subscribe((event) => {
      this.language = event.lang;
    });
  }
}
