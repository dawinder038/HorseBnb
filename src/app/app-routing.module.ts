import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Common-Components/footer/footer.component';
import { HeaderComponent } from './Common-Components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HostYourStallsComponent } from './pages/host-your-stalls/host-your-stalls.component';
import { CreateStallsComponent } from './pages/create-stalls/create-stalls.component';
import { HostGuestsComponent } from './pages/host-guests/host-guests.component';
import { CreateStallsStep3Component } from './pages/create-stalls-step3/create-stalls-step3.component';
import { CreateStallsStep5Component } from './pages/create-stalls-step5/create-stalls-step5.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermConditionsComponent } from './pages/term-conditions/term-conditions.component';
const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"host-your-stalls",component:HostYourStallsComponent},
  {path:"create-your-stalls/step1",component:CreateStallsComponent},
  {path:"host-guests",component:HostGuestsComponent},
  {path:"create-stalls/step3",component:CreateStallsStep3Component},
  {path:"create-stalls/step5",component:CreateStallsStep5Component},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"term-conditions",component:TermConditionsComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
