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
  public rows: number;
  public activeRow: number;
  public position: string;
  constructor() {
    this.activeRow = 1;
    this.position = '0px';
  }

  ngOnInit() {
    this.countRows();
  }
  public countRows(): void {
    this.rows = Math.ceil(this.tilesData.length / 3);
  }
  public onBtnClick(slideDirection: boolean): void {
    let currentPosition = parseInt(this.position, 0);
    if (slideDirection) {
      if (this.activeRow < this.rows) {
        this.activeRow += 1;
        currentPosition += 260;
        this.position = currentPosition + 'px';
      }
    } else {
      if (this.activeRow > 1) {
        this.activeRow -= 1;
        currentPosition -= 260;
        this.position = currentPosition + 'px';
      }
    }
  }
}
