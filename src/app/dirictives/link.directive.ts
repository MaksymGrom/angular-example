import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'a[appLink]'
})
export class LinkDirective {

  constructor(public link: ElementRef<HTMLLinkElement>) {
    console.log('Link works!', link);
  }

}
