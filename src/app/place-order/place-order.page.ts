import { Component, OnInit,ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.page.html',
  styleUrls: ['.././app.component.scss'],
})
export class PlaceOrderPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  constructor(private router:Router) { }
  placeOrder(){
    this.router.navigate(['/all-order']);
    this.modal.dismiss( 'confirm');
  }

  ngOnInit() {
  }

}
