import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from '../shared/c1/c1.component';
import { C2Component } from '../shared/c2/c2.component';
import { C3Component } from '../shared/c3/c3.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    C1Component,
    C2Component,
    C3Component,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
