import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {PropertyCardComponent} from './property/property-card/property-card.component'
import {PropertyListComponent} from './property/property-list/property-list.component'
import {HttpClientModule} from '@angular/common/http'
import { HousingService } from './services/housing.service';
import {AddPropertyComponent} from './property/add-property/add-property.component';

//Each route is a JS object
const appRoutes: Routes = [
  {
    path: 'add-property',
    component: AddPropertyComponent
  },
  {
    path: '',
    component: PropertyListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      PropertyCardComponent,
      PropertyListComponent,
      AddPropertyComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
