import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './routing/routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import {ProductGridService} from './product-grid.service';
import { HttpClientModule } from '@angular/common/http';
import { ShowDetailsService } from './show-details.service';
import { ZlotyCurrencyPipe } from './zloty-currency.pipe';
import { HostnamePipe } from './hostname.pipe';
import { ProductTagsFormComponent } from './product-tags-form/product-tags-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import {MainPageService} from './main-page.service';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [ProductGridService, ShowDetailsService, MainPageService],
  bootstrap: [AppComponent],
  entryComponents: [ProductTileComponent]
})
export class AppModule { }
