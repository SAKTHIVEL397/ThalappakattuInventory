import { Component, OnInit } from '@angular/core';
import { VendorModel } from '../vendor';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.page.html',
  styleUrls: ['./add-vendor.page.scss'],
})
export class AddVendorPage implements OnInit {

  vendor: VendorModel = new  VendorModel();
  constructor() { }

  ngOnInit() {
    // this.vendorService.getvendor().subscribe(response=>console.log(response))
  }

}
