import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ResponseStatus } from '../Dtos/response';
import { LoginFormData } from '../Dtos/loginFormData';
import { CurrentUser } from '../Dtos/currentUser';
import { LoginResponse } from '../Dtos/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public http: HttpClient) { }
  currentUser: BehaviorSubject<CurrentUser> = new BehaviorSubject<CurrentUser>(null as any);
  login(loginFormData: LoginFormData): Observable<ResponseStatus<LoginResponse>> {
    return this.http.post<ResponseStatus<LoginResponse>>("/admin/login-user/", loginFormData);
  }
  setCurrentUser(value: CurrentUser) {
    this.currentUser.next(value);
  }
  getCurentUser(){
    return this.currentUser;
  }
  checkAuthenticate():Observable<ResponseStatus<CurrentUser>>{
return this.http.get<ResponseStatus<CurrentUser>>("/admin/check-authenticate");
  }
  logout():Observable<ResponseStatus<string>>{
    return this.http.get<ResponseStatus<string>>("/admin/logout");
  }
}
