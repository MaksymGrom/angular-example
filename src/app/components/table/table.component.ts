import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { TableHeaderDirective } from '../../directives/table-header.directive';
import { TableCellDirective } from '../../directives/table-cell.directive';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() dataSource: {[key: string]: any}[] = [];
  @Input() displayedColumns: string[] = [];

  @ContentChildren(TableHeaderDirective) headerTemplates!: QueryList<TableHeaderDirective>;
  @ContentChildren(TableCellDirective) cellTemplates!: QueryList<TableCellDirective>;

  getHeaderTemplate(colName: string): TemplateRef<any> | undefined {
    return this.headerTemplates.find(item => item.appTableHeader === colName)?.templateRef;
  }

  getCellTemplate(colName: string): TemplateRef<any> | undefined {
    return this.cellTemplates.find(item => item.appTableCell === colName)?.templateRef;
  }
}
