import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hostname'
})
export class HostnamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'http://' + value.split('/')[2];
  }

}
