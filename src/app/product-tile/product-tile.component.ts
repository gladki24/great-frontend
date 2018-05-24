import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {IProductTile} from '../Interfaces/IProductTile';
import {INavState, NavHiddenState} from './TileState';
import {ShowDetailsService} from '../Services/show-details.service';
import {UserService} from '../Services/user.service';
import {CollectionService} from '../Services/collection.service';
import {DialogService} from '../Services/dialog.service';
import {EDialogType} from '../Enums/EDialogType';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit, OnDestroy {
  @Input() product: IProductTile;
  public cssClass: string;
  public navState: INavState;
  public imgCSS: string;
  private componentDestroy = new Subject<void>();
  constructor(private showDetailService: ShowDetailsService,
              private collection: CollectionService,
              public user: UserService,
              private dialog: DialogService) {
    this.navState = new NavHiddenState();
    this.cssClass = 'tile-nav-index tile-nav-hide tile-nav';
  }

  ngOnInit() {
    this.imgCSS = 'loading';
  }
  ngOnDestroy() {
    this.componentDestroy.next();
    this.componentDestroy.complete();
  }
  onLoad(): void {
    this.imgCSS = '';
  }
  onTransition(): void {
    this.navState.handle(this, false);
  }
  toggleNav(): void {
    this.navState.handle(this, true);
  }
  showDetails(): void {
    this.showDetailService.onShowDetails(this.product.id);
  }
  saveItem(): void {
    this.collection.saveItem(this.product.id).takeUntil(this.componentDestroy).subscribe(res => {
      this.dialog.showDialog('Zapisano produkt', EDialogType.Information);
    });
  }
}
