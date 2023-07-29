import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTableCell]'
})
export class TableCellDirective {
  @Input() appTableCell = '';
  constructor(public templateRef: TemplateRef<{$implicit: unknown}>) { }
}
