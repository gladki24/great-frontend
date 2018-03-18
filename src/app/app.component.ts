import {Component, ViewChild} from '@angular/core';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import {EPanel} from './IPanel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Great';
  @ViewChild(LeftPanelComponent) leftPanel: LeftPanelComponent;
  @ViewChild(RightPanelComponent) rightPanel: RightPanelComponent;

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
