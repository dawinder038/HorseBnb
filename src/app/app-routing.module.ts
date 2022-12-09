import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Common-Components/footer/footer.component';
import { HeaderComponent } from './Common-Components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HostYourStallsComponent } from './pages/host-your-stalls/host-your-stalls.component';
import { CreateStallsComponent } from './pages/create-stalls/create-stalls.component';
import { HostGuestsComponent } from './pages/host-guests/host-guests.component';
import { CreateStallsStep3Component } from './pages/create-stalls-step3/create-stalls-step3.component';
// import { CreateStallsStep5Component } from './pages/create-stalls-step5/create-stalls-step5.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermConditionsComponent } from './pages/term-conditions/term-conditions.component';
import { HostAdventureComponent } from './pages/host-adventure/host-adventure.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountComponent } from './pages/account/account.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { AuthGuardGuard } from './@core/Services/auth-guard.guard';
import { ManageListingComponent } from './pages/manage-listing/manage-listing.component';
import { UpdatePasswordComponent } from './pages/update-password/update-password.component';
import { AmenitiesComponent } from './pages/amenities/amenities.component';
import { CreateStallStep7Component } from './pages/create-stall-step7/create-stall-step7.component';
import { ChatComponent } from './pages/chat/chat.component';
import { DescriptionComponent } from './pages/description/description.component';
import { CreateStallsStep9Component } from './pages/create-stalls-step9/create-stalls-step9.component';
import { CheckInCheckOutComponent } from './pages/check-in-check-out/check-in-check-out.component';
import { SuccessfullHostingComponent } from './pages/successfull-hosting/successfull-hosting.component';
import { CalendarAndAvailabilityComponent } from './pages/calendar-and-availability/calendar-and-availability.component';
import { BookingDetailsComponent } from './pages/booking-details/booking-details.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { DashInsideComponent } from './pages/dash-inside/dash-inside.component';
import { BookingInComponent } from './pages/booking-in/booking-in.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { CreateStallsStep5Component } from './pages/create-stalls-step5/create-stalls-step5.component';


const routes: Routes = [

  {path:"home",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"host-your-stalls",component:HostYourStallsComponent},
  {path:"create-your-stalls/step1",component:CreateStallsComponent},
  {path:"host-guests",component:HostGuestsComponent},
  {path:"create-stalls/step3/:id",component:CreateStallsStep3Component},
  {path:"create-stalls/step5/:id",component:CreateStallsStep5Component},
  // {path:"create-stalls/step5/:id",component:CreateStallsStep5Component},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"term-conditions",component:TermConditionsComponent},
  {path:"host-adventure",component:HostAdventureComponent},
  {path:"dashboard",component:DashboardComponent ,canActivate:[AuthGuardGuard]},
  {path:"account",component:AccountComponent},
  {path:"personal-info",component:PersonalInfoComponent},
  {path:"manage-listing",component:ManageListingComponent},
  {path:"update-password",component:UpdatePasswordComponent},
  {path:"create-stalls/step6/:id",component:AmenitiesComponent},
  {path:"create-stalls/step7/:id",component:CreateStallStep7Component},
  {path:"chat",component:ChatComponent},
  {path:"create-stalls/step8/:id",component:DescriptionComponent},
  {path:"create-stalls/step9/:id",component:CreateStallsStep9Component},
  {path:"create-stalls/checkin-and-checkout/:id",component:CheckInCheckOutComponent},
  {path:"create-stalls/successfull-hosting/:id",component:SuccessfullHostingComponent},
  {path:"create-stalls/step11/1/:id",component:CalendarAndAvailabilityComponent},
  {path:"booking-details/:id",component:BookingDetailsComponent},
  {path:"create-stalls/step12/:id",component:PricingComponent},
  {path:"dash-inside",component:DashInsideComponent},
  {path:"booking-in",component:BookingInComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
