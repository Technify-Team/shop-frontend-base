import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContainerComponent } from './container/container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderComponent } from './order/order.component';
import { SearchComponent } from './search/search.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { FilterComponent } from './filter/filter.component';
import { AccordionModule } from 'primeng/accordion';
import { MenuComponent } from './menu/menu.component';
import { MenubarModule } from 'primeng/menubar';
import { TreeModule } from 'primeng/tree';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';
import { ProductPageComponent } from './product-page/product-page.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductListComponent,
    ContainerComponent,
    OrderComponent,
    SearchComponent,
    BreadCrumbsComponent,
    FilterComponent,
    MenuComponent,
    ProductPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AccordionModule,
    MenubarModule,
    TreeModule,
    PanelMenuModule,
    MegaMenuModule,
    DropdownModule,
    ProgressSpinnerModule,
    RatingModule,
    CheckboxModule,
    FormsModule,
    CheckboxModule,
    FormsModule,
    SliderModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
