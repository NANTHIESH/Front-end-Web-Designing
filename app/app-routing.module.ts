import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BgmiComponent } from './bgmi/bgmi.component';
import { ContentComponent } from './content/content.component';
import { FlightsimComponent } from './flightsim/flightsim.component';
import { FooterComponent } from './footer/footer.component';
import { ForzaComponent } from './forza/forza.component';
import { FreefireComponent } from './freefire/freefire.component';
import { Gta5Component } from './gta5/gta5.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ValorantComponent } from './valorant/valorant.component';
import { WarthunderComponent } from './warthunder/warthunder.component';

const routes: Routes = [
  {path: "courses", component: SidebarComponent}, 
  {path: "contact-us", component: ContentComponent},
  {path:"footer", component: FooterComponent},
  {path: "bgmi", component: BgmiComponent},
  {path: "freefire", component:FreefireComponent},
  {path: "valorant", component:ValorantComponent},
  {path: "gta5", component:Gta5Component},
  {path: "flightsim", component:FlightsimComponent},
  {path: "warthunder", component:WarthunderComponent},
  {path: "forza", component:ForzaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
