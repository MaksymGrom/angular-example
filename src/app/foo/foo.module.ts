import { NgModule } from '@angular/core';
import { FooComponent } from './foo/foo.component';

@NgModule({
  exports: [
    FooComponent
  ],
  declarations: [
    FooComponent
  ]
})
export class FooModule {}
