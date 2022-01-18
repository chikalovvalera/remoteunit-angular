import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './component/root/app.component';
import { CarComponent } from './component/car/car.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { AboutComponent } from './component/about/about.component';
import { NotfoundComponent } from './helper/notfound/notfound.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';



const appRoutes : Routes = [
  {path:'', component:HomeComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'about', component:AboutComponent},
  {path:'**', component:NotfoundComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ContactsComponent,
    AboutComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,

    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
