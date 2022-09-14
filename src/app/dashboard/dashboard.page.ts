import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['.././app.component.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router:Router) { }
  login(){
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
