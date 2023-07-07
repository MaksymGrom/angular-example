import { Directive, ElementRef, Optional } from '@angular/core';
import { ExampleComponent } from '../components/example/example.component';

@Directive({
  selector: '[appFoo]'
})
export class FooDirective {

  constructor(public host: ElementRef, @Optional() public component: ExampleComponent) {
    console.log('Works!', host.nativeElement, component);
  }

}
