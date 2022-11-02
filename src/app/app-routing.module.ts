import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home", loadChildren:()=>import("./pages/home/home-routing.module").then(res=>res.HomeRoutingModule)},
  {path:"header",loadChildren:()=>import("./Common-Components/header/header-routing.module").then(res=>res.HeaderRoutingModule)},
  {path:"footer",loadChildren:()=>import("./Common-Components/footer/footer-routing.module").then(res=>res.FooterRoutingModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
