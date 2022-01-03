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
import { fromEvent, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input()
  title = 'before init parent';

  subscription?: Subscription;
  subscriptions: Subscription[] = [];

  destroy$ = new Subject();

  constructor() {
    console.log('ParentComponent.constructor', this.title);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ParentComponent.ngOnChanges', changes, this.title);
  }

  ngOnInit(): void {
    console.log('ParentComponent.ngOnInit', this.title);
    // this.subscription = fromEvent(document, 'click').subscribe(console.log);

    // this.subscriptions.push(
    //   fromEvent(document, 'click').subscribe(console.log)
    // );

    fromEvent(document, 'click').pipe(
      takeUntil(this.destroy$)
    ).subscribe(console.log);
  }

  ngDoCheck(): void {
    // console.log('ParentComponent.ngDoCheck', this.title);
  }

  ngAfterContentInit(): void {
    // console.log('ParentComponent.ngAfterContentInit', this.title);
  }

  ngAfterContentChecked(): void {
    // console.log('ParentComponent.ngAfterContentChecked', this.title);
  }

  ngAfterViewInit(): void {
    // console.log('ParentComponent.ngAfterViewInit', this.title);
  }

  ngAfterViewChecked(): void {
    // console.log('ParentComponent.ngAfterViewChecked', this.title);
  }

  ngOnDestroy(): void {
    console.log('ParentComponent.ngOnDestroy', this.title);
    // this.subscription?.unsubscribe();

    // for(let s of this.subscriptions) {
    //   s.unsubscribe();
    // }

    this.subscriptions.forEach(s => s.unsubscribe());

    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
