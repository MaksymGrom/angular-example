import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../smart/smart.component';

@Component({
  selector: 'app-dumb',
  templateUrl: './dumb.component.html',
  styleUrls: ['./dumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DumbComponent {
  @Input() user?: User | null;
  @Output() delete = new EventEmitter<User>();
  onDelete(user: User) {
    this.delete.emit(user);
  }
}
