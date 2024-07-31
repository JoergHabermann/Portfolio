import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollTriggerDirective } from '../../../scroll-trigger.directive';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgIf,NgClass, TranslateModule,ScrollTriggerDirective],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() title!: string;
  @Input() skills!: string;
  @Input() descriptionEN!: string;
  @Input() descriptionDE!: string;
  @Input() image!: string;
  @Input() picleft!: boolean;

  constructor(private translate: TranslateService) {   
  }

 public checkGerman() {    
    return this.translate.currentLang === 'de';
  }
}
