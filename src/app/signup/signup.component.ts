import { Component, OnInit } from '@angular/core';
import { Signup } from '../signup';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  types: string[] = ["Fisherman", "Buyer", "Restaurant Owner"];;
  signup: Signup = {
    name: "",
    email: "",
    username: "",
    password: "",
    type: ""
  };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signupcheck(): void {
    let success = this.authService.signup(this.signup);
    if (success) {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
