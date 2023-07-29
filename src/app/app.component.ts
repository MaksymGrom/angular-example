import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataSource = [
    {id: 42, name: 'John', surname: 'Doe', dob: '2003-04-15'},
    {id: 777, name: 'Jenny', surname: 'Doe', dob: '2005-07-31'},
  ];

  displayedColumns = ['id', 'age', 'dob', 'name', 'surname', 'fullName'];

  fullAge(dob: string) {
    const dobDate = new Date(dob);
    const nowDate = new Date();
    let diffYears = nowDate.getFullYear() - dobDate.getFullYear();

    if (nowDate.getMonth() < dobDate.getMonth()
    || (nowDate.getMonth() === dobDate.getMonth() && nowDate.getDate() < dobDate.getDate())) {
      diffYears--;
    }

    return diffYears;
  }
}
