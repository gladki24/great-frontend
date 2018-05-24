import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICollectionItem} from '../Interfaces/ICollectionItem';
import {CollectionService} from '../Services/collection.service';
import {ShowDetailsService} from '../Services/show-details.service';
import {UserService} from '../Services/user.service';
import {DialogService} from '../Services/dialog.service';
import {EDialogType} from '../Enums/EDialogType';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, OnDestroy {
  private id: number;
  public products: ICollectionItem[];
  public title: string;
  public userAuth: boolean;
  private destroyComponent = new Subject<void>();
  constructor(private route: ActivatedRoute,
              private service: CollectionService,
              private showDetailService: ShowDetailsService,
              private userService: UserService,
              private dialog: DialogService) { }

  ngOnInit() {
    this.createView();
  }
  ngOnDestroy() {
    this.destroyComponent.next();
    this.destroyComponent.complete();
  }
  public showDetails(id: string): void {
    this.showDetailService.onShowDetails(id);
  }
  public removeProduct(productId: string): void {
    this.service.removeProduct(this.id, productId).takeUntil(this.destroyComponent).subscribe(res => {
      if (res) {
        this.dialog.showDialog('Usunięto', EDialogType.Warning);
        this.createView();
      } else {
        this.dialog.showDialog('Błąd', EDialogType.Error);
      }
    });
  }
  private createView(): void {
    this.route.params.takeUntil(this.destroyComponent).subscribe(params => {
      this.id = parseInt(params['id'], 0);
      this.getItems(this.id);
      this.getCollectionTitle();
      this.authUser();
    });
  }
  private getItems(id: number): void {
    this.service.getItems(id).takeUntil(this.destroyComponent).subscribe(res => {
      this.products = res;
    });
  }
  private getCollectionTitle(): void {
    this.service.getCollectionTitle(this.id).takeUntil(this.destroyComponent).subscribe(title => {
      this.title = title.title;
    });
  }
  private authUser(): void {
    if (this.userService.getUserLogged()) {
      this.userService.getUserCollections(this.userService.getUserId()).takeUntil(this.destroyComponent).subscribe(collections => {
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


