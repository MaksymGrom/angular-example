import { ChangeDetectionStrategy, Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooComponent {
  user$?: Observable<any>;

  updateUser() {
    this.user$ = of({name: 'John', surname: 'Doe'}).pipe(
      delay(1000)
    );
  }
}
