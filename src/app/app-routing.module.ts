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
import { PublishListingComponent } from './pages/publish-listing/publish-listing.component';
import { StripeComponent } from './pages/stripe/stripe.component';
import { CreateGuestStep1Component } from './pages/create-guest-step1/create-guest-step1.component';
import { CreateGuestStep3Component } from './pages/create-guest-step3/create-guest-step3.component';
import { CreateGuestStep5Component } from './pages/create-guest-step5/create-guest-step5.component';
import { CreateGuestStep6Component } from './pages/create-guest-step6/create-guest-step6.component';
import { CreateGuestStep7Component } from './pages/create-guest-step7/create-guest-step7.component';
import { GuestDescriptionComponent } from './pages/guest-description/guest-description.component';
import { GuestCheckInOutComponent } from './pages/guest-check-in-out/guest-check-in-out.component';
import { GuestSuccessfullComponent } from './pages/guest-successfull/guest-successfull.component';
import { GuestCalendarAvailabilityComponent } from './pages/guest-calendar-availability/guest-calendar-availability.component';
import { GuestPricingComponent } from './pages/guest-pricing/guest-pricing.component';
import { GuestStripeComponent } from './pages/guest-stripe/guest-stripe.component';
import { AvailTypeTwoComponent } from './pages/avail-type-two/avail-type-two.component';


const routes: Routes = [

  {path:"home",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"host-your-stalls",component:HostYourStallsComponent},
  {path:"create-your-stalls/step1",component:CreateStallsComponent,canActivate:[AuthGuardGuard]},
  {path:"host-guests",component:HostGuestsComponent},
  {path:"create-stalls/step3/:id",component:CreateStallsStep3Component,canActivate:[AuthGuardGuard]},
  {path:"create-stalls/step5/:id",component:CreateStallsStep5Component,canActivate:[AuthGuardGuard]},
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
  {path:"create-stalls/step6/:id",component:AmenitiesComponent,canActivate:[AuthGuardGuard]},
  {path:"create-stalls/step7/:id",component:CreateStallStep7Component,canActivate:[AuthGuardGuard]},
  {path:"chat",component:ChatComponent},
  {path:"create-stalls/step8/:id",component:DescriptionComponent,canActivate:[AuthGuardGuard]},
  {path:"create-stalls/step9/:id",component:CreateStallsStep9Component,canActivate:[AuthGuardGuard]},
  {path:"create-stalls/checkin-and-checkout/:id",component:CheckInCheckOutComponent,canActivate:[AuthGuardGuard]},
  {path:"create-stalls/successfull-hosting/:id",component:SuccessfullHostingComponent,canActivate:[AuthGuardGuard]},
  {path:"create-stalls/step11/1/:id",component:CalendarAndAvailabilityComponent,canActivate:[AuthGuardGuard]},
  {path:"create-stalls/availabilty/2/:id",component:AvailTypeTwoComponent},
  {path:"booking-details/:id",component:BookingDetailsComponent,canActivate:[AuthGuardGuard]},
  {path:"create-stalls/step12/:id",component:PricingComponent,canActivate:[AuthGuardGuard]},
  {path:"dash-inside",component:DashInsideComponent,canActivate:[AuthGuardGuard]},
  {path:"booking-in",component:BookingInComponent,canActivate:[AuthGuardGuard]},
  {path:"reviews",component:ReviewsComponent},
  {path:"manage-listing/publish-listing/:id",component:PublishListingComponent ,canActivate:[AuthGuardGuard]},
  {path:"create-stalls/step13/:id",component:StripeComponent,canActivate:[AuthGuardGuard]},
  {path:"create-guest/step1",component:CreateGuestStep1Component},
  {path:"create-guest/step3/:id",component:CreateGuestStep3Component},
  {path:"create-guest/step5/:id",component:CreateGuestStep5Component},
  {path:"create-guest/step6/:id",component:CreateGuestStep6Component},
  {path:"create-guest/step7/:id",component:CreateGuestStep7Component},
  {path:"create-guest/step8/:id",component:GuestDescriptionComponent},
  {path:"create-guest/step9/:id",component:GuestCheckInOutComponent},
  {path:"create-guest/successfull-hosting/:id",component:GuestSuccessfullComponent},
  {path:"create-guest/step11/1/:id",component:GuestCalendarAvailabilityComponent},
  {path:"create-guest/step12/:id",component:GuestPricingComponent},
  {path:"create-guest/step13/:id",component:GuestStripeComponent},
  {path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
