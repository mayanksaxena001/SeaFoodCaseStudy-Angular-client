import { Injectable } from '@angular/core';
import { Login } from './login';
import { Signup } from './signup';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
  auth: boolean = true;
  token : string = 'jsd';
  constructor(private _router: Router) { }

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
    console.log("Login Service", login);
    return this.auth;
  }

  signup(signup: Signup): boolean {
    //TODO
    console.log("Signup Service", signup);
    return this.auth;
  }
}
