import { Injectable } from '@angular/core';
import { Login } from './login';
import { Signup } from './signup';
import { CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  URL: string = 'http://localhost:8080/';
  auth: boolean = true;
  token: string = '';
  constructor(private _router: Router, private http: HttpClient) { }

  canActivate(): boolean {
    if (this.auth === true && this.token !== undefined) {
      return true;
    } else {
      // display error mesage
      this._router.navigateByUrl('/notFound');
    }
  }

  login(login: Login): boolean {
    //TODO
    var resp = this.http.post(URL + 'api/auth/login', login);
    console.log("Login Service", resp);
    return this.auth;
  }

  signup(signup: Signup): boolean {
    //TODO
    var resp = this.http.post(URL + 'api/auth/login', signup);
    console.log("Signup Service", resp);
    return this.auth;
  }

  setAuthToken(auth, token) {
    this.auth = auth;
    this.token = token;
  }
}
