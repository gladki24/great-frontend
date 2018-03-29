import { Component, OnInit } from '@angular/core';
import {DialogService} from '../Services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  style: string;
  message: Array<string>;
  constructor(private service: DialogService) {
    this.service.message$.subscribe(message => {
      if (typeof message !== 'string') {
        this.message = message;
      } else {
        const messages: Array<string> = [];
        messages.push(message);
        this.message = messages;
      }
    });
    this.service.style$.subscribe(style => {
      this.style = style;
    });
  }
  ngOnInit() {
  }
  hideDialog(): void {
    this.style = 'hidden';
  }
}
