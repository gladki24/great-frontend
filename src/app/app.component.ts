import {Component, OnInit} from '@angular/core';
import {EPanel} from './Interfaces/IPanel';
import {UserService} from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Great';

  constructor(private user: UserService) {}
  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.user.setUserLogged(localStorage.getItem('user'));
    }
  }
}
