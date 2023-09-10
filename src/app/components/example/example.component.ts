import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { BorderDirective } from '../../directives/border.directive';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
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
export class ExampleComponent {

}
