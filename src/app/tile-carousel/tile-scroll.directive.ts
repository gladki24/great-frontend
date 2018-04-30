import {Directive, ElementRef, Input} from '@angular/core';
import {HostListener} from '@angular/core';
import {DirectionState, RightScroll, LeftScroll} from './DirectionState';

@Directive({
  selector: '[appTileScroll]'
})
export class TileScrollDirective {
  public interval: number;
  public scrollPosition: number;
  public directionState: DirectionState;

  constructor(public element: ElementRef) {
    console.log(element.nativeElement.childElementCount);
    this.directionState = new RightScroll();
    this.scrollPosition = 0;
    this.interval = setInterval(() => {
      this.scroll();
    }, 10);
  }
  @HostListener('mouseover') onUserScroll(): void {
    clearInterval(this.interval);
  }
  private scroll(): void {
    // console.log(this.scrollPosition);
    this.directionState.scroll(this);
    this.element.nativeElement.scrollTo(this.scrollPosition, 0);
  }
}
