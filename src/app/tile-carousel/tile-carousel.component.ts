import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {ISmallTile} from '../Interfaces/IDetails';

@Component({
  selector: 'app-tile-carousel',
  templateUrl: './tile-carousel.component.html',
  styleUrls: ['./tile-carousel.component.scss']
})
export class TileCarouselComponent implements OnInit, OnChanges {
  @Input() tilesData: ISmallTile[];
  @Input() type: string;
  public width: number;
  constructor() {
  }
  ngOnInit() {
  }
  ngOnChanges() {
    this.width = this.tilesData.length * 260;
  }
  public createUrl(id: number): string {
    let url: string;
    switch (this.type) {
      case 'brand': {
        return url = `/explore/${id}/0/27`;
      }
      case 'category': {
        return url = `/explore/0/${id}/27`;
      }
      default : {
        return url = '/explore/0/0/27';
      }
    }
  }
}
