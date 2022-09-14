import { Component, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IonSlide, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.page.html',
  styleUrls: ['.././app.component.scss'],
})
export class AllOrderPage implements OnInit {

  @ViewChild('slide') slide:IonSlides;
  
  categories = ['Current','Completed','Blocked'];
  constructor(private router:Router) { }
  
  type ='Current';
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
  showDetails(){
    this.router.navigate(['/order-history']);
  }

  ngOnInit() {
  }

}
