import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dateObject: Date = new Date();
  timestamp: number = Date.now();
  dateString: string = '2022-02-19';
}
