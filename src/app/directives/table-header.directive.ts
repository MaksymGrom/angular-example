import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTableHeader]'
})
export class TableHeaderDirective {

  @Input() appTableHeader = '';
  constructor(public templateRef: TemplateRef<unknown>) { }
}
