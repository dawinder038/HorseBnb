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
    UpdatePasswordComponent
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
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },AuthGuardGuard,HorseServiceService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
