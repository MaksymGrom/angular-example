import { NgModule } from '@angular/core';
import { C0Component } from './c0/c0.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { C4Component } from './c4/c4.component';
import { C5Component } from './c5/c5.component';
import { C6Component } from './c6/c6.component';
import { C7Component } from './c7/c7.component';
import { C8Component } from './c8/c8.component';
import { C9Component } from './c9/c9.component';

@NgModule({
  imports: [
    C0Component,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,
    C6Component,
    C7Component,
    C8Component,
    C9Component
  ],
  exports: [
    C0Component,
    C1Component,
    C2Component,
    C3Component,
    C4Component,
    C5Component,
    C6Component,
    C7Component,
    C8Component,
    C9Component
  ]
})
export class SharedModule { }
