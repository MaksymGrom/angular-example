import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.background')
  background = 'none'

  @HostListener('mouseenter')
  addHighlight() {
    this.background = 'red'
  }

  @HostListener('mouseleave')
  removeHighlight() {
    this.background = 'none'
  }
}
