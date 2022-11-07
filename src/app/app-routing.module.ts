import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Common-Components/footer/footer.component';
import { HeaderComponent } from './Common-Components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HostYourStallsComponent } from './pages/host-your-stalls/host-your-stalls.component';
import { CreateStallsComponent } from './pages/create-stalls/create-stalls.component';
import { HostGuestsComponent } from './pages/host-guests/host-guests.component';
const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"host-your-stalls",component:HostYourStallsComponent},
  {path:"create-your-stalls",component:CreateStallsComponent},
  {path:"host-guests",component:HostGuestsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
