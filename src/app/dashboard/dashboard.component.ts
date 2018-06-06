import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string = 'ADMIN';
  account: string = 'MAYANK';
  types: string[] = ["Fisherman", "Buyer", "Restaurant Owner"];
  entities = [];
  transferEntities = [];
  selectedType: string;
  constructor() { }

  ngOnInit() {
  }

  showAdminDetails() {

  }
}
