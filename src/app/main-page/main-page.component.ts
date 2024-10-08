import { Component, Renderer2 } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BurgermenuComponent } from './burgermenu/burgermenu.component';
import { NgClass } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    HeaderComponent,
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactComponent,
    FooterComponent,
    BurgermenuComponent,
    NgClass,
    TranslateModule    
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  burgerstatus:boolean = false;

  constructor(private renderer: Renderer2, private translate: TranslateService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  /**
   * switching burgerstatus boolean, as well as toggling document scroll ability
   */
  toggleBurgerStatus() {
    this.burgerstatus = !this.burgerstatus;
    if (this.burgerstatus) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }  
}
