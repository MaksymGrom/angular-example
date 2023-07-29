import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { TableHeaderDirective } from './directives/table-header.directive';
import { TableCellDirective } from './directives/table-cell.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableHeaderDirective,
    TableCellDirective
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
