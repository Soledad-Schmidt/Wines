import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { FormsModule } from "@angular/forms";
import { CartWinesComponent } from './cart-wines/cart-wines.component';
import { WinesAdminComponent } from './wines-admin/wines-admin.component';
import { WinesMainComponent } from './wines-main/wines-main.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    WineListComponent,
    CartWinesComponent,
    WinesAdminComponent,
    WinesMainComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
