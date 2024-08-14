import { Component } from '@angular/core';
import { HeaderComponent } from '../main-page/header/header.component';
import { FooterComponent } from '../main-page/footer/footer.component';
import { LegalDEComponent } from './legal-de/legal-de.component';
import { LegalENComponent } from './legal-en/legal-en.component';
import { NgIf } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,LegalDEComponent,LegalENComponent,NgIf],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent  {

  constructor(private translate: TranslateService) {}  

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  /**
   * Function to evaluate current Language
   * @returns true if current set language is german
   */
 checkGerman() {    
    return this.translate.currentLang === 'de';
  }
}
