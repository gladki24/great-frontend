
import {TileScrollDirective} from './tile-scroll.directive';

export interface DirectionState {
  scroll(context: TileScrollDirective): void;
}

export class LeftScroll implements  DirectionState {
  public scroll(context: TileScrollDirective): void {
    context.scrollPosition < 0 ? context.directionState = new RightScroll() : context.scrollPosition -= 1;
  }
}

export class RightScroll implements DirectionState {
  public scroll(context: TileScrollDirective): void {
    const width = context.element.nativeElement.clientWidth;
    context.scrollPosition > width ? context.directionState = new LeftScroll() : context.scrollPosition += 1;
  }
}

export class SuspendScroll implements DirectionState {
  public scroll(context: TileScrollDirective): void {
    clearInterval(context.interval);
    setTimeout(() => {
      context.interval = setInterval(() => {
        context.scroll();
      }, 10);
      context.directionState = new LeftScroll();
    }, 5000);
  }
}
