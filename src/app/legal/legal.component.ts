import { Component } from '@angular/core';
import { HeaderComponent } from '../main-page/header/header.component';
import { FooterComponent } from '../main-page/footer/footer.component';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent {

}
