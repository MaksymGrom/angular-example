import { Component, OnInit } from '@angular/core';
import { FooDirective } from './directives/foo.directive';
import { BarDirective } from './directives/bar.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  hostDirectives: [BarDirective, FooDirective]
})
export class AppComponent implements OnInit {
  title = 'my-project';

  ngOnInit(): void {
    console.log('AppComponent.ngOnInit');
  }
}
