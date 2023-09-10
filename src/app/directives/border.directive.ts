import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorder]',
  standalone: true
})
export class BorderDirective {

  @Input() color = 'darkgreen';
  @HostBinding('style.border') border = '';

  @HostListener('mouseenter')
  enter() {
    this.border = `1px solid ${this.color}`;
  }

  @HostListener('mouseleave')
  leave() {
    this.border = '';
  }
}
