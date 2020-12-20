import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {PropertyCardComponent} from './property/property-card/property-card.component'
import {PropertyListComponent} from './property/property-list/property-list.component'
import {HttpClientModule} from '@angular/common/http'
import { HousingService } from './services/housing.service';
import {AddPropertyComponent} from './property/add-property/add-property.component';
import {PropertyDetailComponent} from './property/property-detail/property-detail.component';
import {UserLoginComponent} from './user/user-login/user-login.component';
import {UserRegisterComponent} from './user/user-register/user-register.component';


//Each route is a JS object
const appRoutes: Routes = [
  {path: '',component: PropertyListComponent},
  {path: 'add-property',component: AddPropertyComponent},
  {path: 'rent-property',component: PropertyListComponent},
  {path: 'property-detail/:id',component: PropertyDetailComponent},
  {path: 'user/login',component: UserLoginComponent},
  {path: 'user/register',component: UserRegisterComponent},
  {path: '**',component: PropertyListComponent},
]

@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      PropertyCardComponent,
      PropertyListComponent,
      AddPropertyComponent,
      PropertyDetailComponent,
      UserLoginComponent,
      UserRegisterComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
