import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { EPanel } from '../Interfaces/IPanel';
import {ShowDetailsService} from '../Services/show-details.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() onLeftPanelClick = new EventEmitter<EPanel>();
  @Output() onRightPanelClick = new EventEmitter<EPanel>();
  public navigationStyle = 'navigation';
  public btnDisabled = true;
  constructor(private showDetailsService: ShowDetailsService) {
    showDetailsService.id$.subscribe(() => {
      this.toggleRightPanel();
      this.btnDisabled = false;
    });
  }
  ngOnInit() {
  }

  toggleLeftPanel() {
    this.onLeftPanelClick.emit(EPanel.left);
  }
  toggleRightPanel() {
    this.onRightPanelClick.emit(EPanel.right);
  }
  toggleShadow() {
    if (window.scrollY === 0) {
      this.navigationStyle = 'navigation';
    } else {
      this.navigationStyle = 'navigation nav-shadow';
    }
  }
}
