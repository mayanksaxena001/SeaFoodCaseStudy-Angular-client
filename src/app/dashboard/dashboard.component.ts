import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  authenticated: boolean = false;
  userid: string = '';
  constructor() { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    if (this.userid) {
      this.authenticated = false;
    }
  }



}
