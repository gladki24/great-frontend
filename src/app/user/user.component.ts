import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';
import {User} from './user';
import { ICollectionName } from '../Interfaces/ICollectionName';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {DialogService} from '../Services/dialog.service';
import {EDialogType} from '../Enums/EDialogType';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public userDetails: User;
  public collections: ICollectionName[];
  public userForm: FormGroup;
  public newCollectionName: string;
  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              private dialog: DialogService) {
    this.userForm = formBuilder.group({
      'name': [null],
      'surname': [null],
      'description': [null]
    });
  }

  ngOnInit() {
    this.getUserDetails();
    this.getUsersCollections();
  }
  private getUserDetails(): void {
    this.userService.getUserDetails().subscribe(res => {
      this.userDetails = res;
    });
  }
  private getUsersCollections(): void {
    this.userService.getUserCollections(this.userService.getUserId()).subscribe(collections => {
      this.collections = collections;
    });
  }
  public changeUserDetails(form: any, id: string): void {
    this.userService.saveUserDetails(form, id).subscribe(res => {
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
    this.userService.addUserCollection(name).subscribe(res => {
      this.getUsersCollections();
      this.dialog.showDialog('Dodano', EDialogType.Information);
    }, err => {
      this.dialog.showDialog('Błąd', EDialogType.Error);
    });
  }
  public deleteCollection(id: number): void {
    this.userService.deleteUserCollection(id).subscribe(res => {
      if (res) {
        this.dialog.showDialog('Usunięto kolekcje', EDialogType.Warning);
        this.getUsersCollections();
      } else {
        this.dialog.showDialog('Błąd', EDialogType.Error);
      }
    });
  }
}
