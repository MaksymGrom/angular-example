import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'date'
})
export class AppDatePipe implements PipeTransform {

  constructor(private date: DatePipe) {}

  transform(value: Date | string | number, format?: string, timezone?: string, locale?: string): string | null;
  transform(value: null | undefined, format?: string, timezone?: string, locale?: string): null;
  transform(value: Date | string | number | null | undefined, format?: string, timezone?: string, locale?: string): string | null {
    return this.date.transform(value, format || '__MMM++__++d _ yyyy', timezone, locale);
  }

}
