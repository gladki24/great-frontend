import { Component, OnInit } from '@angular/core';
import { IPanel, EStatePanel } from '../Interfaces/IPanel';
import {UserService} from '../Services/user.service';
import {PanelMediatorService} from '../Services/panel-mediator.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit, IPanel {
  public style: string;
  public state: EStatePanel;
  constructor(public user: UserService,
              private panelMediator: PanelMediatorService) {
  }
  ngOnInit() {
    this.style = 'left-panel hidden-left-panel';
    this.state = EStatePanel.close;
    this.panelMediator.leftPanel.subscribe(state => {
      switch (state) {
        case EStatePanel.close: {
          this.closePanel();
          break;
        }
        case EStatePanel.open: {
          this.togglePanel();
          break;
        }
      }
    });
  }
  public togglePanel(): void {
    if (this.state === EStatePanel.close) {
      this.openPanel();
    } else if (this.state === EStatePanel.open) {
      this.closePanel();
    }
  }
  public closePanel(): void {
    this.style = 'hidden-left-panel left-panel';
    this.state = this.panelMediator.leftPanelState = EStatePanel.close;
  }
  public openPanel(): void {
    this.style = 'left-panel';
    this.state = this.panelMediator.leftPanelState = EStatePanel.open;
  }
}
