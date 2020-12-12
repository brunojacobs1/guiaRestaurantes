import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RestaurantFormComponent } from './components/restaurant-form/restaurant-form.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { FormsModule } from '@angular/forms';
import { RestaurantListBodyComponent } from './components/restaurant-list-body/restaurant-list-body.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantFormComponent,
    RestaurantListComponent,
    RestaurantListBodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
