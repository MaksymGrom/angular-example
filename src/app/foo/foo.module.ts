import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';
import { FooChildComponent } from './foo-child/foo-child.component';

@NgModule({
  declarations: [
    FooComponent,
    FooChildComponent
  ],
  exports: [
    FooComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooModule { }
