import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollTriggerDirective } from '../../scroll-trigger.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule,ScrollTriggerDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  
}
