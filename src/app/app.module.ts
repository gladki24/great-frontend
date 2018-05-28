// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {RoutingModule} from './routing/routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { ProductTagsFormComponent } from './product-tags-form/product-tags-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TileCarouselComponent } from './tile-carousel/tile-carousel.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DialogComponent } from './dialog/dialog.component';
import { CollectionComponent } from './collection/collection.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';

// Services
import {ProductGridService} from './Services/product-grid.service';
import { ShowDetailsService } from './Services/show-details.service';
import {MainPageService} from './Services/main-page.service';
import {DialogService} from './Services/dialog.service';
import {AuthService} from './Services/auth.service';
import {UserService} from './Services/user.service';
import {CollectionService} from './Services/collection.service';
import {TagService} from './Services/tag.service';

// Pipes
import { ZlotyCurrencyPipe } from './Pipes/zloty-currency.pipe';
import { HostnamePipe } from './Pipes/hostname.pipe';

// Guards
import {AuthGuard} from './Guards/auth.guard';

// Directives
import { TileScrollDirective } from './tile-carousel/tile-scroll.directive';
import {PanelMediatorService} from './Services/panel-mediator.service';

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
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductGridService,
    ShowDetailsService,
    MainPageService,
    DialogService,
    AuthService,
    UserService,
    CollectionService,
    AuthGuard,
    TagService,
    PanelMediatorService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ProductTileComponent]
})
export class AppModule { }
