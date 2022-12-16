import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FooterModule } from './Common-Components/footer/footer.module';
// import { HeaderModule } from './Common-Components/header/header.module';
import { HomeComponent } from '../app/pages/home/home.component';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Common-Components/header/header.component';
import { FooterComponent } from './Common-Components/footer/footer.component';
import { HostYourStallsComponent } from './pages/host-your-stalls/host-your-stalls.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CreateStallsComponent } from './pages/create-stalls/create-stalls.component';
import { HostGuestsComponent } from './pages/host-guests/host-guests.component';
import { InterceptorService } from './@core/Services/interceptor.service';
import { CreateStallsStep3Component } from './pages/create-stalls-step3/create-stalls-step3.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { TermConditionsComponent } from './pages/term-conditions/term-conditions.component';
import { HostAdventureComponent } from './pages/host-adventure/host-adventure.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountComponent } from './pages/account/account.component';
import { PersonalInfoComponent } from './pages/personal-info/personal-info.component';
import { HorseServiceService } from './@core/Services/horse-service.service';
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
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PricingComponent } from './pages/pricing/pricing.component';
import { DashInsideComponent } from './pages/dash-inside/dash-inside.component';
import { SideNavComponent } from './pages/side-nav/side-nav.component';
import { BookingInComponent } from './pages/booking-in/booking-in.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CreateStallsStep5Component } from './pages/create-stalls-step5/create-stalls-step5.component';
import { PublishListingComponent } from './pages/publish-listing/publish-listing.component';
import { StripeComponent } from './pages/stripe/stripe.component';
import { CreateGuestStep1Component } from './pages/create-guest-step1/create-guest-step1.component';
import { CreateGuestStep3Component } from './pages/create-guest-step3/create-guest-step3.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HostYourStallsComponent,
    CreateStallsComponent,
    HostGuestsComponent,
    CreateStallsStep3Component,
    AboutUsComponent,
    ContactUsComponent,
    TermConditionsComponent,
    HostAdventureComponent,
    DashboardComponent,
    AccountComponent,
    PersonalInfoComponent,
    ManageListingComponent,
    UpdatePasswordComponent,
    AmenitiesComponent,
    CreateStallStep7Component,
    ChatComponent,
    DescriptionComponent,
    CreateStallsStep9Component,
    CheckInCheckOutComponent,
    SuccessfullHostingComponent,
    CalendarAndAvailabilityComponent,
    BookingDetailsComponent,
    PricingComponent,
    DashInsideComponent,
    SideNavComponent,
    BookingInComponent,
    ReviewsComponent,
    TransactionsComponent,
    CreateStallsStep5Component,
    PublishListingComponent,
    StripeComponent,
    CreateGuestStep1Component,
    CreateGuestStep3Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HeaderModule,
    // FooterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    ToastrModule.forRoot(),

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },AuthGuardGuard,HorseServiceService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
