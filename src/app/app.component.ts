import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataSource = [
    {id: 42, name: 'John', surname: 'Doe', dob: '2003-04-15'},
    {id: 777, name: 'Jenny', surname: 'Doe', dob: '2005-08-12'},
  ];

  displayedColumns = ['id', 'dob', 'name', 'surname'];
}
