import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles: [
    `
      h1 { color: pink; }
      h2 { color: yellow; }
    `,
    `
      h3 { color: green; }
    `
  ]
})
export class AppComponent {
  title = 'my-project';
}
