import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthLoginService{
  currentUser: IUser;
  apiUrl:string = "https://demo.paymeapp.co/api/v2/login";

  constructor(private _http:Http){

  }
  loginUser(userData : any){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post(this.apiUrl, JSON.stringify(userData), {headers})
    .map(res => res.json());
  }

  isAuthenticated(){
    return !!this.currentUser;
  }
}
