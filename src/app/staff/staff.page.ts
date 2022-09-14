import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['.././app.component.scss'],
})
export class StaffPage implements OnInit {

  constructor(private router:Router) { }

  addStaff(){
    this.router.navigate(['/add-staff']);
  }

  ngOnInit() {
  }

}
