import { Component, OnInit } from '@angular/core';
import { IPanel, EStatePanel } from '../IPanel';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit, IPanel {
  public style: string;
  public state: EStatePanel;
  constructor() { }

  ngOnInit() {
    this.style = 'left-panel hidden-left-panel';
    this.state = EStatePanel.close;
  }
  public togglePanel(): void {
    if (this.state) {
      this.openPanel();
    } else if (!this.state) {
      this.closePanel();
    }
  }
  public closePanel(): void {
    this.style = 'hidden-left-panel left-panel';
    this.state = EStatePanel.close;
  }
  public openPanel(): void {
    this.style = 'left-panel';
    this.state = EStatePanel.open;
  }
}
