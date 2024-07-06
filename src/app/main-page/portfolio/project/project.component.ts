import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() title!: string;
  @Input() skills!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() picleft!: boolean;
}
