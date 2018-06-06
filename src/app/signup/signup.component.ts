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
  constructor(private authService: AuthService, private router: Router) { }
  types: string[] = ["Fisherman", "Buyer", "Restaurant Owner"];
  signup: Signup = {
    name: "",
    email: "",
    username: "",
    password: "",
    type: ""
  };
  selectedType: string = this.types[0];

  ngOnInit() {
  }

  signupcheck(): void {
    let success = this.authService.signup(this.signup);
    if (success) {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
