import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooModule } from './foo/foo.module';
import { BarComponent } from './bar/bar.component';
import { BarModule } from './bar/bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooModule,
    //BarComponent,
    BarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
