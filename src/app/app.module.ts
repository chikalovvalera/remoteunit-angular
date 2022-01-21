import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './component/root/app.component';
import { NotfoundComponent } from './helper/notfound/notfound.component';
import { HeaderComponent } from './component/customelement/header/header.component';
import { FooterComponent } from './component/customelement/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { NavpanelComponent } from './component/customelement/navpanel/navpanel.component';
import { OutSideClickComponent } from './directive/out-side-click/out-side-click.component';
import { ServerAreaComponent } from './component/server/server-area/server-area.component';
import { ServerComponent } from './component/server/server/server.component';





const appRoutes : Routes = [
  {path:'', component:HomeComponent},
  {path:'**', component:NotfoundComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NavpanelComponent,
    OutSideClickComponent,
    ServerAreaComponent,
    ServerComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule,
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
