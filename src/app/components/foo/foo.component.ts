import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  @Input()
  itemTemplate?: TemplateRef<{$implicit: string}>;

  items = ['one', 'two', 'three'];
  constructor() { }

  ngOnInit(): void {
  }

}
