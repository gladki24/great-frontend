import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductGridComponent } from '../product-grid/product-grid.component';
import { MainPageComponent} from '../main-page/main-page.component';

const Routes: Routes = [
  { path: '', component: MainPageComponent},
  { path: 'explore/:brand/:category', component: ProductGridComponent },
  { path:  '**', redirectTo: 'explore/2/2'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
