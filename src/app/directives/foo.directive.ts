import { Directive } from '@angular/core';

@Directive({
  selector: '[appFoo]'
})
export class FooDirective {

  constructor() {
    console.log('[appFoo]')
  }

}
