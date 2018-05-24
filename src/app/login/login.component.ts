import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogService} from '../Services/dialog.service';
import {AuthService} from '../Services/auth.service';
import {ILogin, IRegister} from '../Interfaces/ILogin_IRegsiter';
import {Router} from '@angular/router';
import {EDialogType} from '../Enums/EDialogType';
import {UserService} from '../Services/user.service';
import 'rxjs/add/operator/takeUntil';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  public registerForm: FormGroup;
  public loginForm: FormGroup;
  public visibleSection: number;
  private destroyComponent = new Subject<void>();
  constructor(
    private formBuilder: FormBuilder,
    private dialog: DialogService,
    private router: Router,
    private auth: AuthService,
    private user: UserService) {
    this.visibleSection = 2;
    this.registerForm = formBuilder.group({
      'nick': [null, Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
        Validators.pattern(/^[a-z0-9_-]{4,15}$/)
      ])],
      'email': [null, Validators.compose([
        Validators.required,
        Validators.email,
      ])],
      'password': [null, Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ])],
      'birth': '',
      'terms': [null, Validators.requiredTrue]
    });
    this.loginForm = formBuilder.group({
      'email': [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      'password': [null, Validators.required]
    });
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.destroyComponent.next();
    this.destroyComponent.complete();
  }
  public showSection(number: number): void {
    this.visibleSection = number;
  }
  public signUp(form: IRegister): void {
    console.log(form);
    this.auth.signUp(form).takeUntil(this.destroyComponent).subscribe(res => {
      this.dialog.showDialog('Użytkownik dodany!', EDialogType.Information);
      this.signIn(form);
    }, err => {
      this.dialog.showDialog('Użytkownik już istnieje', EDialogType.Error);
    });
  }
  public signIn(form: ILogin): void {
    this.auth.signIn(form).takeUntil(this.destroyComponent).subscribe(res => {
      if (res !== null) {
        this.user.setUserLogged(res.id);
        this.dialog.showDialog('Zalogowano', EDialogType.Information);
        this.router.navigate(['/user']);
      } else {
        this.dialog.showDialog('Błędny login lub hasło', EDialogType.Error);
      }
    }, err => {
      this.dialog.showDialog('Błąd serwera', EDialogType.Error);
    });
  }
}
