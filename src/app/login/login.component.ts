import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = { username: "", password: "" };

  constructor(private authService: AuthService,
    private router: Router) { }
  ngOnInit() {
  }

  loginCheck(): void {
    let success = this.authService.login(this.login);
    if (success) {
      this.router.navigateByUrl('/dashboard');
    }
  }

}
