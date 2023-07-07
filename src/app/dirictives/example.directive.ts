import { Directive, ElementRef } from '@angular/core';
import { ExampleComponent } from '../components/example/example.component';

@Directive({
  selector: 'app-example[appExample]'
})
export class ExampleDirective {

  constructor(public element: ElementRef, public component: ExampleComponent) {
    console.log(element, component);
  }

}
