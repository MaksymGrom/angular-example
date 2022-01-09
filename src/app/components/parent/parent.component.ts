import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  QueryList,
  SimpleChanges,
  ViewChild,
  ViewChildren
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @ViewChild('jqueryNeverDie', {static: true, read: ElementRef})
  jqueryContainer!: ElementRef<HTMLDivElement>;

  @ViewChild(ChildComponent)
  appChild!: ChildComponent;

  @ViewChildren(ChildComponent)
  appChildren!: QueryList<ChildComponent>;

  @Input()
  title = 'before init parent';

  constructor(private cd: ChangeDetectorRef) {
    console.log('ParentComponent.constructor', this.jqueryContainer);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ParentComponent.ngOnChanges', changes, this.jqueryContainer);
  }

  ngOnInit(): void {
    console.log('ParentComponent.ngOnInit', this.jqueryContainer);
  }

  ngDoCheck(): void {
    console.log('ParentComponent.ngDoCheck', this.jqueryContainer);
  }

  ngAfterContentInit(): void {
    console.log('ParentComponent.ngAfterContentInit', this.jqueryContainer);
  }

  ngAfterContentChecked(): void {
    console.log('ParentComponent.ngAfterContentChecked', this.jqueryContainer);
  }

  ngAfterViewInit(): void {
    // Promise.resolve().then(() => this.appChild.title = 'FOO');

    this.appChild.title = 'FOO';
    this.cd.detectChanges();
    console.log('ParentComponent.ngAfterViewInit', this.jqueryContainer);
  }

  ngAfterViewChecked(): void {
    console.log('ParentComponent.ngAfterViewChecked', this.jqueryContainer);
  }

  ngOnDestroy(): void {
    console.log('ParentComponent.ngOnDestroy', this.jqueryContainer);
  }

}
