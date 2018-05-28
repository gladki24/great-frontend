import {Component, OnInit} from '@angular/core';
import {EPanel, EStatePanel} from '../Interfaces/IPanel';
import {ShowDetailsService} from '../Services/show-details.service';
import {PanelMediatorService} from '../Services/panel-mediator.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public navigationStyle = 'navigation';
  public btnDisabled: boolean;
  public rightPanelIcon = 'fas fa-info-circle';
  constructor(private showDetailsService: ShowDetailsService,
              public panelMediator: PanelMediatorService) {
    if (!localStorage.getItem('product_id')) {
      this.btnDisabled = true;
    }
  }
  ngOnInit() {
    this.showDetailsService.id$.subscribe(id => {
      this.btnDisabled = false;
    });
    this.panelMediator.rightPanelState$.subscribe(state => {
      switch (state) {
        case EStatePanel.close: {
          this.rightPanelIcon = 'fas fa-info-circle';
          break;
        }
        case EStatePanel.open: {
          this.rightPanelIcon = 'fas fa-times';
          break;
        }
        default: {
          this.rightPanelIcon = 'fas fa-info-circle';
          break;
        }
      }
    });
  }

  toggleLeftPanel() {
    this.panelMediator.managePanels(EPanel.left);
  }
  toggleRightPanel() {
    this.panelMediator.managePanels(EPanel.right);
  }
  closePanels() {
    this.panelMediator.closeLeftPanel();
    this.panelMediator.closeRightPanel();
  }
  toggleShadow() {
    if (window.scrollY === 0) {
      this.navigationStyle = 'navigation';
    } else {
      this.navigationStyle = 'navigation nav-shadow';
    }
  }
}
