import { Component, OnInit, OnDestroy } from '@angular/core';
import {UserService} from '../Services/user.service';
import {User} from './user';
import { ICollectionName } from '../Interfaces/ICollectionName';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogService} from '../Services/dialog.service';
import {EDialogType} from '../Enums/EDialogType';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  public userDetails: User;
  public collections: ICollectionName[];
  public userForm: FormGroup;
  public newCollectionName: string;
  public visibleSection: number;
  private destroyComponent = new Subject<void>();
  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              private dialog: DialogService,
              private route: ActivatedRoute) {
    this.userForm = formBuilder.group({
      'name': [null],
      'surname': [null],
      'description': [null]
    });
  }

  ngOnInit() {
    this.getRouteParams();
    this.getUserDetails();
    this.getUsersCollections();
  }
  ngOnDestroy() {
    this.destroyComponent.next();
    this.destroyComponent.complete();
  }
  private getRouteParams() {
    this.route.params.takeUntil(this.destroyComponent).subscribe(params => {
      this.visibleSection = params['section'];
    });
  }
  public showSection(number: number) {
    this.visibleSection = number;
  }
  private getUserDetails(): void {
    this.userService.getUserDetails().takeUntil(this.destroyComponent).subscribe(res => {
      this.userDetails = res;
    });
  }
  private getUsersCollections(): void {
    this.userService.getUserCollections(this.userService.getUserId()).subscribe(collections => {
      this.collections = collections;
    });
  }
  public changeUserDetails(form: any, id: string): void {
    this.userService.saveUserDetails(form, id).takeUntil(this.destroyComponent).subscribe(res => {
      if (res) {
        this.dialog.showDialog('Zapisano!', EDialogType.Information);
      }
    });
  }
  public logOut(): void {
    this.userService.setUserLogout();
    this.router.navigate(['/login']);
    this.dialog.showDialog('Wylogowano', EDialogType.Warning);
  }
  public addCollection(name: string): void {
    if (!name) {
      name = 'Brak nazwy';
    }
    this.userService.addUserCollection(name).takeUntil(this.destroyComponent).subscribe(res => {
      this.getUsersCollections();
      this.dialog.showDialog('Dodano', EDialogType.Information);
    }, err => {
      this.dialog.showDialog('Błąd', EDialogType.Error);
    });
  }
  public deleteCollection(id: number): void {
    this.userService.deleteUserCollection(id).takeUntil(this.destroyComponent).subscribe(res => {
      if (res) {
        this.dialog.showDialog('Usunięto kolekcje', EDialogType.Warning);
        this.getUsersCollections();
      } else {
        this.dialog.showDialog('Błąd', EDialogType.Error);
      }
    });
  }
  public deleteUser(): void {
    this.userService.delete(this.userService.getUserId()).takeUntil(this.destroyComponent).subscribe(res => {
      if (res) {
        this.dialog.showDialog('Użytkownik usunięty', EDialogType.Warning);
        this.userService.setUserLogout();
        this.router.navigate(['/login']);
      } else {
        this.dialog.showDialog('Błąd', EDialogType.Error);
      }
    });
  }
}
