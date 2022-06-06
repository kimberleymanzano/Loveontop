import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ProductsService } from './services/products.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { StoreComponent } from './components/store/store.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartObjectComponent } from './components/cart-object/cart-object.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    AboutUsComponent,
    StoreComponent,
    ContactUsComponent,
    CartComponent,
    ProductItemComponent,
    CartObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductItemComponent], /* creo que esto esta mal, deberia ser ProductServices */
  bootstrap: [AppComponent]
})
export class AppModule { }
