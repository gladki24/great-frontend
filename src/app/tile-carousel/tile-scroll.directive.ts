import {Directive, ElementRef, Input, OnChanges} from '@angular/core';
import {HostListener} from '@angular/core';
import {DirectionState, RightScroll, SuspendScroll} from './DirectionState';

@Directive({
  selector: '[appTileScroll]'
})
export class TileScrollDirective implements OnChanges {
  @Input() width: number;
  public interval: number;
  public scrollPosition: number;
  public directionState: DirectionState;
  public scrollLeft: number;

  constructor(public element: ElementRef) {
    this.directionState = new RightScroll();
    this.scrollPosition = 0;
  }
  ngOnChanges() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.scroll();
    }, 1);
  }
  @HostListener('touchmove')
  @HostListener('mouseover') onUserScroll(): void {
    this.directionState = new SuspendScroll();
  }
  @HostListener('scroll', ['$event']) onScroll(): void {
    this.scrollLeft = event.srcElement.scrollLeft;
  }
  public scroll(): void {
    this.directionState.scroll(this);
    this.element.nativeElement.scrollTo(this.scrollPosition, 0);
  }
}
