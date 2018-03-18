import {Component, OnInit} from '@angular/core';
import {IProductTile} from './IProductTile';
import {INavState, NavHiddenState} from './TileState';
import {ShowDetailsService} from '../show-details.service';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {
  public product: IProductTile;
  public cssClass: string;
  public navState: INavState;
  constructor(private showDetailService: ShowDetailsService) {
    this.navState = new NavHiddenState();
    this.cssClass = 'tile-nav-index tile-nav-hide tile-nav';
  }

  ngOnInit() {
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
}
