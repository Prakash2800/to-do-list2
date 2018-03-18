import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import { Control1Component } from './counter/control-1/control-1.component';
import { Control2Component } from './counter/control-2/control-2.component';
import { ClockComponent } from './clock/clock.component';
import { CounterComponent } from './counter/counter.component';
import { ProductComponent } from './product/product/product.component';
import { CribListingComponent } from './product/crib-listing/crib-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    MenuComponent,
    Control1Component,
    Control2Component,
    ClockComponent,
    CounterComponent,
    ProductComponent,
    CribListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
