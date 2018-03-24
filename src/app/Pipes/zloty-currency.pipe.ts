import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zlotyCurrency'
})
export class ZlotyCurrencyPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return value + ' zł';
  }

}
