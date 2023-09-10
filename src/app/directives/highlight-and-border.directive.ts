import { Directive } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { BorderDirective } from './border.directive';

@Directive({
  selector: '[appHighlightAndBorder]',
  standalone: true,
  hostDirectives: [
    {
      directive: HighlightDirective,
      inputs: ['color'],
      outputs: []
    },
    {
      directive: BorderDirective,
      inputs: ['color: borderColor']
    }
  ]
})
export class HighlightAndBorderDirective {}
