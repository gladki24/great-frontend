import { Component, OnInit } from '@angular/core';
import {User} from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public model: User;
  constructor() {
    this.model = new User('seweryngla@hotmail.com', 'cosiek', 'jedendwatrzy');
  }

  ngOnInit() {
  }
  onSubmit(): void {

  }
}
