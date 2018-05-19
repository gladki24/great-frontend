import {Component, OnInit} from '@angular/core';
import { IPanel, EStatePanel } from '../Interfaces/IPanel';
import {ShowDetailsService} from '../Services/show-details.service';
import {IDetails} from '../Interfaces/IDetails';
import {UserService} from '../Services/user.service';
import {ICollectionName} from '../Interfaces/ICollectionName';
import {CollectionService} from '../Services/collection.service';
import {DialogService} from '../Services/dialog.service';
import {EDialogType} from '../Enums/EDialogType';

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
  public collections: ICollectionName[];
  public visibleSection: number;
  constructor(private showDetailsService: ShowDetailsService,
              private user: UserService,
              private collectionService: CollectionService,
              private dialog: DialogService) {
    this.visibleSection = 1;
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
    if (this.user.getUserLogged()) {
      this.getCollections();
    }
  }
  public addToCollection(collectionId: number) {
    this.collectionService.addItemToCollection(this.productId, collectionId).subscribe(res => {
      this.dialog.showDialog('Dodano!', EDialogType.Information);
      console.log(res);
    }, err => {
      this.dialog.showDialog('Produkt już jest w tej kolekcji', EDialogType.Warning);
    });
  }
  public showSection(section: number): void {
    this.visibleSection = section;
  }
  private getCollections(): void {
    this.user.getUserCollections(this.user.getUserId()).subscribe(collections => {
      this.collections = collections;
    });
  }
}
