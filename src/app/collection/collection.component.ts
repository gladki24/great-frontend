import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICollectionItem} from '../Interfaces/ICollectionItem';
import {CollectionService} from '../Services/collection.service';
import {ShowDetailsService} from '../Services/show-details.service';
import {UserService} from '../Services/user.service';
import {DialogService} from '../Services/dialog.service';
import {EDialogType} from '../Enums/EDialogType';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  private id: number;
  public products: ICollectionItem[];
  public title: string;
  public userAuth: boolean;
  constructor(private route: ActivatedRoute,
              private service: CollectionService,
              private showDetailService: ShowDetailsService,
              private userService: UserService,
              private dialog: DialogService) { }

  ngOnInit() {
    this.createView();
  }
  public showDetails(id: string): void {
    this.showDetailService.onShowDetails(id);
  }
  public removeProduct(productId: string): void {
    this.service.removeItem(this.id, productId).subscribe(res => {
      if (res) {
        this.dialog.showDialog('Usunięto', EDialogType.Warning);
        this.createView();
      } else {
        this.dialog.showDialog('Błąd', EDialogType.Error);
      }
    });
  }
  private createView(): void {
    this.route.params.subscribe(params => {
      this.id = parseInt(params['id'], 0);
      this.getItems(this.id);
      this.getCollectionTitle();
      this.authUser();
    });
  }
  private getItems(id: number): void {
    this.service.getItems(id).subscribe(res => {
      this.products = res;
    });
  }
  private getCollectionTitle(): void {
    this.service.getCollectionTitle(this.id).subscribe(title => {
      this.title = title.title;
    });
  }
  private authUser(): void {
    if (this.userService.getUserLogged()) {
      this.userService.getUserCollections(this.userService.getUserId()).subscribe(collections => {
        for (const collection of collections) {
          if (collection.id === this.id) {
            this.userAuth = true;
            break;
          } else {
            this.userAuth = false;
          }
        }
      });
    } else {
      this.userAuth = false;
    }
  }
}


