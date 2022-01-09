import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-project';
  show = true;

  array = [1, 2, 3];

  modifyArray() {
    this.array.push(5);
    //this.array = [...this.array, 5];
  }
}
