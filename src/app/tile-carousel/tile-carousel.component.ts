import {Component, Input, OnInit} from '@angular/core';
import {ISmallTile} from '../Interfaces/IDetails';

@Component({
  selector: 'app-tile-carousel',
  templateUrl: './tile-carousel.component.html',
  styleUrls: ['./tile-carousel.component.scss']
})
export class TileCarouselComponent implements OnInit {
  @Input() tilesData: ISmallTile[];
  @Input() dataType: string;
  constructor() {
  }

  ngOnInit() {
  }
}
