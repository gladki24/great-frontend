import {EventEmitter, Injectable, Output} from '@angular/core';
import {EPanel, EStatePanel} from '../Interfaces/IPanel';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PanelMediatorService {
  @Output() leftPanel: EventEmitter<EStatePanel> = new EventEmitter<EStatePanel>();
  @Output() rightPanel: EventEmitter<EStatePanel> = new EventEmitter<EStatePanel>();
  public leftPanelState: EStatePanel;
  public rightPanelState: Subject<EStatePanel> = new Subject<EStatePanel>();
  public rightPanelState$ = this.rightPanelState.asObservable();

  constructor() { }
  public managePanels(panel: EPanel): void {
    if (panel === EPanel.left) {
      this.rightPanel.emit(EStatePanel.close);
      this.leftPanel.emit(EStatePanel.open);
    }
    if (panel === EPanel.right) {
      this.rightPanel.emit(EStatePanel.open);
      this.leftPanel.emit(EStatePanel.close);
    }
  }
  public openRightPanel(): void {
    this.rightPanel.emit(EStatePanel.open);
    this.leftPanel.emit(EStatePanel.close);
  }
  public openLeftPanel(): void {
    this.rightPanel.emit(EStatePanel.close);
    this.leftPanel.emit(EStatePanel.open);
  }
  public closeRightPanel(): void {
    this.rightPanel.emit(EStatePanel.close);
  }
  public closeLeftPanel(): void {
    this.leftPanel.emit(EStatePanel.close);
  }
}
