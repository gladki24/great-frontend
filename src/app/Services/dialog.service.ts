import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DialogService {
  private message = new Subject<Array<string>>();
  private style = new Subject<string>();
  public message$ = this.message.asObservable();
  public style$ = this.style.asObservable();
  constructor() {
    this.style.next('hidden');
  }
  showDialog(message: Array<string>): void {
    this.message.next(message);
    this.style.next('show');
  }
}
