import { Component, OnInit } from '@angular/core';
import { IPanel, EStatePanel } from '../Interfaces/IPanel';
import {ShowDetailsService} from '../Services/show-details.service';
import {IDetails} from '../Interfaces/IDetails';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit, IPanel {
  public state: EStatePanel;
  public style: string;
  public productDetail: IDetails;
  private productId: string;
  constructor(public showDetailsService: ShowDetailsService) {
    this.showDetailsService.id$.subscribe(id => {
      this.productId = id;
      this.showDetailsService.getDetails(this.productId).subscribe(product => {
        this.productDetail = product[0];
      });
    });
  }

  ngOnInit() {
    this.style = 'right-panel hidden-right-panel';
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
    this.style = 'hidden-right-panel right-panel';
    this.state = EStatePanel.close;
  }
  public openPanel(): void {
    this.style = 'right-panel';
    this.state = EStatePanel.open;
  }
}
