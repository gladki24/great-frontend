import { ProductTileComponent } from './product-tile.component';

export interface INavState {
  handle(context: ProductTileComponent, click: boolean): void;
}

export class NavVisibleState implements  INavState {
  handle(context: ProductTileComponent, click: boolean): void {
    context.navState = new NavHiddingState();
    context.cssClass = 'tile-nav-index tile-nav-hide tile-nav';
  }
}

export class NavHiddenState implements  INavState {
  handle(context: ProductTileComponent, click: boolean): void {
    context.navState = new NavDisplayState();
    context.cssClass = 'tile-nav-index tile-nav';
  }
}

export class NavHiddingState implements  INavState {
  handle(context: ProductTileComponent, click: boolean): void {
    if (!click) {
      context.navState = new NavHiddenState();
      context.cssClass = 'tile-nav-index tile-nav-hide tile-nav';
    }
  }
}

export class NavDisplayState implements INavState {
  handle(context: ProductTileComponent, click: boolean): void {
    if (!click) {
      context.navState = new NavVisibleState();
      context.cssClass = 'tile-nav';
    }
  }
}
