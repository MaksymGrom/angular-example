import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './category/category.component';
import { ReviewComponent } from './components/review/review.component';
import { CommentComponent } from './components/comment/comment.component';
import { FooComponent } from './components/foo/foo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    CategoryComponent,
    ReviewComponent,
    CommentComponent,
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
