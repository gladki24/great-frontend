import {Component, Input, OnInit} from '@angular/core';
import {IProductTile} from '../Interfaces/IProductTile';
import {INavState, NavHiddenState} from './TileState';
import {ShowDetailsService} from '../Services/show-details.service';

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent implements OnInit {
  @Input() product: IProductTile;
  public cssClass: string;
  public navState: INavState;
  public imgCSS: string;
  constructor(private showDetailService: ShowDetailsService) {
    this.navState = new NavHiddenState();
    this.cssClass = 'tile-nav-index tile-nav-hide tile-nav';
  }

  ngOnInit() {
    this.imgCSS = 'loading';
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
}
