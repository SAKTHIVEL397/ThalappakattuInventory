import { Component, OnInit } from '@angular/core';

export class StaffModel {
  id: any;
  FirstName: string;
  LastName: string;
  Email: string;
  Mobile: string;
  RoleId: any;
 
  Password: string;

}
@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.page.html',
  styleUrls: ['./add-staff.page.scss'],
})
export class AddStaffPage implements OnInit {
  staff: StaffModel = new StaffModel;
  constructor() { }

  ngOnInit() {
  }

}
