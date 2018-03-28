import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';
import {NgForm} from '@angular/forms';
import {DialogService} from '../Services/dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public model: User;
  constructor(private dialog: DialogService) {
  }

  ngOnInit() {
  }
  onRegister(form: NgForm): void {
    this.validateForms(form);
    if (this.validateForms(form)) {
    }
  }
  onLogin(form: NgForm): void {
    if (this.validateForms(form)) {
    }
  }
  validateForms(data: NgForm): boolean {
    const message = [];
    if (data.value.email.indexOf('@') === -1) {
      message.push('Niepoprawny adres e-mail!');
    }
    if (message.length > 0) {
      this.dialog.showDialog(message);
      return false;
    }
    return true;
  }
}
