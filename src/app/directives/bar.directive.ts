import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appBar]',
  standalone: true
})
export class BarDirective implements OnInit {

  constructor() {
    console.log('BarDirective');
  }

  ngOnInit(): void {
    console.log('BarDirective.ngOnInit');
  }
}
