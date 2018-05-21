import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductGridComponent } from '../product-grid/product-grid.component';
import { MainPageComponent} from '../main-page/main-page.component';
import {UserComponent} from '../user/user.component';
import {LoginComponent} from '../login/login.component';
import {AuthGuard} from '../Guards/auth.guard';
import {CollectionComponent} from '../collection/collection.component';

const Routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'explore/:brand/:category/:number', component: ProductGridComponent },
  { path: 'search/:type/:query/:number', component: ProductGridComponent},
  { path: 'login', component: LoginComponent },
  { path: 'user/:section', canActivate: [AuthGuard], component: UserComponent},
  { path: 'user', canActivate: [AuthGuard], redirectTo: 'user/1'},
  { path: 'collection/:id', component: CollectionComponent},
  { path:  '**', redirectTo: 'explore/2'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
