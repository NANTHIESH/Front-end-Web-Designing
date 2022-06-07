import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { BgmiComponent } from './bgmi/bgmi.component';
import { FreefireComponent } from './freefire/freefire.component';
import { ValorantComponent } from './valorant/valorant.component';
import { Gta5Component } from './gta5/gta5.component';
import { FlightsimComponent } from './flightsim/flightsim.component';
import { WarthunderComponent } from './warthunder/warthunder.component';
import { ForzaComponent } from './forza/forza.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent,
    BgmiComponent,
    FreefireComponent,
    ValorantComponent,
    Gta5Component,
    FlightsimComponent,
    WarthunderComponent,
    ForzaComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
