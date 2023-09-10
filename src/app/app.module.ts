import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BorderDirective } from './directives/border.directive';
import { HighlightAndBorderDirective } from './directives/highlight-and-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightDirective,
    BorderDirective,
    HighlightAndBorderDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
