import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Pipe({
  name: 'appAsync',
  pure: false,
})
export class AppAsyncPipe implements PipeTransform, OnDestroy {

  private observable?: Observable<any>;
  private value?: any;
  private subscription?: Subscription;

  constructor(private cdr: ChangeDetectorRef) {
  }
  transform<T>(observable?: Observable<T>): T | null {
    if (!observable) {
      this.dispose();
      return null;
    }
    if (!this.observable) {
      this.observable = observable;
      this.subscription = this.observable.subscribe(val => {
        this.value = val;
        this.cdr.detectChanges();
      });
    }

    if (this.observable !== observable) {
      this.dispose();
      return this.transform(observable);
    }

    return this.value ?? null;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private dispose() {
    this.subscription?.unsubscribe();
    this.subscription = undefined;
    this.observable = undefined;
    this.value = undefined;
  }

}
