import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {EDialogType} from '../Enums/EDialogType';

@Injectable()
export class DialogService {
  private message = new Subject<Array<string> | string>();
  private style = new Subject<string>();
  public message$ = this.message.asObservable();
  public style$ = this.style.asObservable();
  constructor() {
    this.style.next('hidden');
  }
  showDialog(message: Array<string> | string, type: EDialogType): void {
    this.message.next(message);
    let style = 'show ';

    switch (type) {
      case EDialogType.Information: {
        style += 'information';
        break;
      }
      case EDialogType.Error: {
        style += 'error';
        break;
      }
      case EDialogType.Warning: {
        style += 'warning';
        break;
      }
    }
    this.style.next(style);
  }
}
