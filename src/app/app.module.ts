import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmartComponent } from './components/smart/smart.component';
import { DumbComponent } from './components/dumb/dumb.component';

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    DumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
