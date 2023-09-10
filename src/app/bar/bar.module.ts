import { NgModule } from '@angular/core';
import { FooModule } from '../foo/foo.module';

@NgModule({
  imports: [
    FooModule,
  ],
  exports: [
    FooModule,
  ]
})
export class BarModule { }
