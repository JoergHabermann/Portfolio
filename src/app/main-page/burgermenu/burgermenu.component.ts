import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-burgermenu',
  standalone: true,
  imports: [NgClass,TranslateModule],
  templateUrl: './burgermenu.component.html',
  styleUrl: './burgermenu.component.scss'
})
export class BurgermenuComponent {
  @Input() burgerstatusMenu:boolean = false;
  @Output() statusEvent = new EventEmitter<boolean>();


  menuSlideOut() {
    this.burgerstatusMenu = false;
    this.statusEvent.emit(this.burgerstatusMenu);
  }  
}
