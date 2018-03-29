import { Injectable } from '@angular/core';
import {User} from '../user/user';
import {HttpClient} from '@angular/common/http';
import {DialogService} from './dialog.service';
import {EDialogType} from '../Enums/EDialogType';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private dialog: DialogService) { }
  public signUp(data: User) {
    let url: string;
    if (data.birth) {
      url = `http://${window.location.hostname}:3000/user/add`;
    } else {
      url = `http://${window.location.hostname}:3000/user/add`;
    }
    return this.http.post<User>(url, {
      email: data.email,
      password: data.password,
      nick: data.nick,
      birth: data.birth
    }).subscribe(res => {
      this.dialog.showDialog(JSON.stringify(res), EDialogType.Information);
    }, err => {
      console.error(err, EDialogType.Error);
    });
  }
}

