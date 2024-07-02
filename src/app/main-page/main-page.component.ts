import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

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
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
