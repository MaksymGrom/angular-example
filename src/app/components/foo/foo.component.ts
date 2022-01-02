import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent {

  @Input()
  template?: TemplateRef<{$implicit: number}>;
}
