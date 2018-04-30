import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './routing/routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import {ProductGridService} from './Services/product-grid.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowDetailsService } from './Services/show-details.service';
import { ZlotyCurrencyPipe } from './Pipes/zloty-currency.pipe';
import { HostnamePipe } from './Pipes/hostname.pipe';
import { ProductTagsFormComponent } from './product-tags-form/product-tags-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import {MainPageService} from './Services/main-page.service';
import { TileCarouselComponent } from './tile-carousel/tile-carousel.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import {DialogService} from './Services/dialog.service';
import {AuthService} from './Services/auth.service';
import {UserService} from './Services/user.service';
import {AuthGuard} from './Guards/auth.guard';
import { CollectionComponent } from './collection/collection.component';
import {CollectionService} from './Services/collection.service';
import { FilterComponent } from './filter/filter.component';
import { TileScrollDirective } from './tile-carousel/tile-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LeftPanelComponent,
    RightPanelComponent,
    ProductGridComponent,
    ProductTileComponent,
    ZlotyCurrencyPipe,
    HostnamePipe,
    ProductTagsFormComponent,
    MainPageComponent,
    TileCarouselComponent,
    UserComponent,
    LoginComponent,
    DialogComponent,
    CollectionComponent,
    FilterComponent,
    TileScrollDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductGridService,
    ShowDetailsService,
    MainPageService,
    DialogService,
    AuthService,
    UserService,
    CollectionService,
    AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [ProductTileComponent]
})
export class AppModule { }
