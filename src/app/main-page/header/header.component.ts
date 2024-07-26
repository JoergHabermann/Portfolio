import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() burgerstatusHead:boolean = false;
  @Output() statusEvent = new EventEmitter<boolean>();

  menuSlideIn() {
    this.burgerstatusHead = true;
    this.statusEvent.emit(this.burgerstatusHead);
  }
}
