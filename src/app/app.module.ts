import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAsyncPipe } from './pipes/app-async.pipe';
import { FooComponent } from './components/foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    AppAsyncPipe,
    FooComponent
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
