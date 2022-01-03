import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input()
  title = '';

  constructor() {
    // console.log('ChildComponent.constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ChildComponent.ngOnChanges', changes);
  }

  ngOnInit(): void {
    // console.log('ChildComponent.ngOnInit');
  }

  ngDoCheck(): void {
    // console.log('ChildComponent.ngDoCheck');
  }

  ngAfterContentInit(): void {
    // console.log('ChildComponent.ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    // console.log('ChildComponent.ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    // console.log('ChildComponent.ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    // console.log('ChildComponent.ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    // console.log('ChildComponent.ngOnDestroy');
  }
}
