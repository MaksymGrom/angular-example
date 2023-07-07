import { Directive, Optional, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemplate]'
})
export class TemplateDirective {

  constructor(
    @Optional() public template: TemplateRef<any>
  ) {
    console.log('TemplateDirective', template);
  }

}
