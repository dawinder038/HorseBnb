import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  apiUrl='https://airbnb-clone.henceforthsolutions.com:3001/v1/api/'
  constructor(private http: HttpClient) { }

  signUpApi(data: any) {
    return this.http.post(this.apiUrl+"current_user/create",data)
  }
  loginApi(data:any){
    return this.http.post(this.apiUrl+"login",data);
  }
}


