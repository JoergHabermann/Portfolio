import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollTrigger]',
  standalone: true
})
export class ScrollTriggerDirective {
  private hasAnimated: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (!this.hasAnimated) {
      const rect = this.el.nativeElement.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const children = this.el.nativeElement.querySelectorAll('.animate');
        children.forEach((child: HTMLElement) => {
          this.renderer.addClass(child, 'visible');
        });
        this.hasAnimated = true;
      }
    }
  }
}
