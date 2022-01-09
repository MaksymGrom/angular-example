import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @ContentChild('ref', {static: true, read: ChildComponent})
  appChild?: ChildComponent;

  @ContentChildren('reff', {read: ChildComponent})
  childrenContent!: QueryList<ChildComponent>;

  @ContentChildren('foo,bar,baz', {read: TemplateRef})
  templates!: QueryList<TemplateRef<{ $implicit: string }>>;

  @Input()
  title = 'before init parent';

  constructor() {
    console.log('ParentComponent.constructor', this.title, this.appChild);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ParentComponent.ngOnChanges', changes, this.title, this.appChild);
  }

  ngOnInit(): void {
    console.log('ParentComponent.ngOnInit', this.title, this.appChild);
  }

  ngDoCheck(): void {
    console.log('ParentComponent.ngDoCheck', this.title, this.appChild);
  }

  ngAfterContentInit(): void {
    this.appChild?.sayHi();
    if (this.appChild) {
      this.appChild.title = 'FOO';
    }

    console.log('templates', this.templates);
    console.log('ParentComponent.ngAfterContentInit', this.title, this.appChild, this.childrenContent);
  }

  ngAfterContentChecked(): void {
    console.log('ParentComponent.ngAfterContentChecked', this.title, this.appChild);
  }

  ngAfterViewInit(): void {
    console.log('ParentComponent.ngAfterViewInit', this.title, this.appChild);
  }

  ngAfterViewChecked(): void {
    console.log('ParentComponent.ngAfterViewChecked', this.title, this.appChild);
  }

  ngOnDestroy(): void {
    console.log('ParentComponent.ngOnDestroy', this.title, this.appChild);
  }

}
