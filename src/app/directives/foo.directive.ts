import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appFoo]',
  standalone: true
})
export class FooDirective implements OnInit {

  constructor() {
    console.log('FooDirective');
  }

  ngOnInit(): void {
    console.log('FooDirective.ngOnInit');
  }
}
