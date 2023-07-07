import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooDirective } from './dirictives/foo.directive';
import { LinkDirective } from './dirictives/link.directive';
import { ExampleComponent } from './components/example/example.component';
import { ExampleDirective } from './dirictives/example.directive';
import { TemplateDirective } from './dirictives/template.directive';

@NgModule({
  declarations: [
    AppComponent,
    FooDirective,
    LinkDirective,
    ExampleComponent,
    ExampleDirective,
    TemplateDirective
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
