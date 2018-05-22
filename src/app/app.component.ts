import {Component, ViewChild, OnInit} from '@angular/core';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import {EPanel} from './Interfaces/IPanel';
import {UserService} from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Great';
  @ViewChild(LeftPanelComponent) leftPanel: LeftPanelComponent;
  @ViewChild(RightPanelComponent) rightPanel: RightPanelComponent;

  constructor(private user: UserService) {}
  ngOnInit() {
    if (localStorage.getItem('user')) {
      this.user.setUserLogged(localStorage.getItem('user'));
    }
  }

  public panelMediator(event: EPanel): void {
    if (event === EPanel.left) {
      this.rightPanel.closePanel();
      this.leftPanel.togglePanel();
    }
    if (event === EPanel.right) {
      this.leftPanel.closePanel();
      this.rightPanel.togglePanel();
    }
  }
}
