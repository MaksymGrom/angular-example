import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges
} from '@angular/core';

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

  private length = 1;

  constructor(private cdr: ChangeDetectorRef) {
    // console.log('ParentComponent.constructor', this.title);
  }

  private _title = 'before init parent';

  get title() {
    return this._title;
  }

  @Input()
  set title(val: string) {
    this._title = val;
    console.log('ParentComponent.setTitle', this._title);
  }

  private _array = [1];

  get array(): number[] {
    return this._array;
  }

  @Input() set array(val: number[]) {
    this._array = val;
    console.log('ParentComponent.setArray', this._array);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ParentComponent.ngOnChanges', changes, this.title);
  }

  ngOnInit(): void {
    // console.log('ParentComponent.ngOnInit', this.title);
    setTimeout(() => {
      this.title = 'foo';
      this.cdr.markForCheck();
    }, 1000);
  }

  ngDoCheck(): void {
    console.log('ParentComponent.ngDoCheck', this.title);
    if (this.length !== this.array.length) {
      console.log('Has changes');
      this.cdr.markForCheck();
      this.length = this.array.length;
    }
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
    // console.log('ParentComponent.ngOnDestroy', this.title);
  }

}
