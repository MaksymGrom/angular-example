import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar.component';

/**
 * @deprecated
 * @see BarComponent
 */
@NgModule({
  imports: [BarComponent],
  exports: [BarComponent],
})
export class BarModule { }
