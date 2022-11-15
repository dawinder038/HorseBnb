import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class HorseServiceService {
  apiUrl='https://airbnb-clone.henceforthsolutions.com:3001/v1/api/'
  constructor(private http: HttpClient) { }

  signUpApi(data: any) {
    return this.http.post(this.apiUrl+"current_user/create",data)
  }
  loginApi(data:any){
    return this.http.post(this.apiUrl+"login",data);
  }
  getDataApi(){
    return this.http.get(this.apiUrl+"current_user/show")
  }
  createOwnListingApi(data:any){
    return this.http.post(this.apiUrl+"own_listings/create_draft",data)
  }
  ownListingShowIdApi(id:any){
    return this.http.get(this.apiUrl+"own_listings/show?id="+id)
  }
  ownListingUpdateApi(data:any){
    return this.http.post(this.apiUrl+"own_listings/update",data)
  }
  ownListingQueryApi(){
    return this.http.get(this.apiUrl+"listings/query?perPage=10&page=1")
  }
  listingDashboardApi(){
    return this.http.get(this.apiUrl+"listings/dashboard")
  }
  currentUserUpdateProfile(data:any){
    return this.http.post(this.apiUrl+"current_user/update_profile",data)
  }
}


