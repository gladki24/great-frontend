import {Component, OnInit, OnDestroy} from '@angular/core';
import { IPanel, EStatePanel } from '../Interfaces/IPanel';
import {ShowDetailsService} from '../Services/show-details.service';
import {IDetails} from '../Interfaces/IDetails';
import {UserService} from '../Services/user.service';
import {ICollectionName} from '../Interfaces/ICollectionName';
import {CollectionService} from '../Services/collection.service';
import {DialogService} from '../Services/dialog.service';
import {EDialogType} from '../Enums/EDialogType';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';
import {PanelMediatorService} from '../Services/panel-mediator.service';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})
export class RightPanelComponent implements OnInit, OnDestroy, IPanel {
  public state: EStatePanel;
  public style: string;
  public productDetail: IDetails;
  private productId: string;
  public collections: ICollectionName[];
  public visibleSection: number;
  private destroyComponent = new Subject<void>();
  constructor(private showDetailsService: ShowDetailsService,
              private user: UserService,
              private collectionService: CollectionService,
              private dialog: DialogService,
              private panelMediator: PanelMediatorService) {
    this.visibleSection = 1;
    if (this.productId = localStorage.getItem('product_id')) {
      this.getProductDetails(this.productId);
    }
    this.showDetailsService.id$.subscribe(id => {
      this.productId = id;
      localStorage.setItem('product_id', id);
      this.getProductDetails(this.productId);
    });
  }

  ngOnInit() {
    this.style = 'right-panel hidden-right-panel';
    this.state = EStatePanel.close;
    this.panelMediator.rightPanel.subscribe(state => {
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
  ngOnDestroy() {
    this.destroyComponent.next();
    this.destroyComponent.complete();
  }
  public togglePanel(): void {
    if (this.state === EStatePanel.close) {
      this.openPanel();
    } else if (this.state === EStatePanel.open) {
      this.closePanel();
    }
  }
  public closePanel(): void {
    this.style = 'hidden-right-panel right-panel';
    this.state = EStatePanel.close;
    this.panelMediator.rightPanelState.next(EStatePanel.close);
  }
  public openPanel(): void {
    this.style = 'right-panel';
    this.state = EStatePanel.open;
    this.panelMediator.rightPanelState.next(EStatePanel.open);
    if (this.user.getUserLogged()) {
      this.getCollections();
    }
  }
  public addToCollection(collectionId: number) {
    this.collectionService.addItemToCollection(this.productId, collectionId).takeUntil(this.destroyComponent).subscribe(res => {
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
    this.user.getUserCollections(this.user.getUserId()).takeUntil(this.destroyComponent).subscribe(collections => {
      this.collections = collections;
    });
  }
  private getProductDetails(productId: string) {
    this.showDetailsService.getDetails(this.productId).subscribe(product => {
      this.productDetail = product[0];
    });
  }
}
