import { Injectable } from '@angular/core';
import {User} from '../user/user';

@Injectable()
export class UserService {
  private isUserLogged: boolean;
  private userData: User;
  constructor() {
    this.isUserLogged = false;
  }
  public setUserLogged(data: User[]) {
    this.isUserLogged = true;
    this.userData = data[0];
  }
  public getUserLogged() {
    return this.isUserLogged;
  }

}
