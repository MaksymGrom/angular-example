import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { TableHeaderDirective } from '../../directives/table-header.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() dataSource: {[key: string]: any}[] = [];
  @Input() displayedColumns: string[] = [];

  @ContentChildren(TableHeaderDirective) headerTemplates!: QueryList<TableHeaderDirective>;

  getHeaderTemplate(colName: string): TemplateRef<any> | undefined {
    return this.headerTemplates.find(item => item.appTableHeader === colName)?.templateRef;
  }
}
