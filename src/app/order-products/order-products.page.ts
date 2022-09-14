import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IonSlide, IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.page.html',
  styleUrls: ['.././app.component.scss'],
})
export class OrderProductsPage implements OnInit {

  @ViewChild('slide') slide:IonSlides;
  
  categories = ['Market','Oil','Shop'];
  constructor(private router:Router) { }
  
  type ='Market';
  hai(event:any) {
    this.slide.getActiveIndex().then(index=>{
      this.type = this.categories[index]
      this.slide.slideTo(index)
    })
  }
  click(i:any){
    console.log(i)
    this.type = this.categories[i]
    this.slide.slideTo(i)
  }
  addOrder(){
    this.router.navigate(['/order-products']);
  }
  goOrder(){
    this.router.navigate(['/place-order']);
  }
  goOrderhistory(){
    this.router.navigate(['/all-order']);
  }

  ngOnInit() {
  }

}
