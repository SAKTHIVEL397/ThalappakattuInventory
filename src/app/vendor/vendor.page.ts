import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.page.html',
  styleUrls: ['.././app.component.scss'],
})
export class VendorPage implements OnInit {

  constructor(private router:Router) { }

  addVendor(){
    this.router.navigate(['/add-vendor']);
  }
  ngOnInit() {
  }

}
