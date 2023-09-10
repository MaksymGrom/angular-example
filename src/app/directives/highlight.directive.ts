import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @Input() color = 'pink';
  @HostBinding('style.backgroundColor') bgc = '';

  @HostListener('mouseenter')
  enter() {
    this.bgc = this.color;
  }

  @HostListener('mouseleave')
  leave() {
    this.bgc = '';
  }
}
