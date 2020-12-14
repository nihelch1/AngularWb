import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
totalItems: any;
burgers = 0;
colorVal ='#4682B4';

constructor(){
  this.calculateTotalItems()
}
burgerChanged(count : number){
  this.burgers=count;
  this.calculateTotalItems()
}

calculateTotalItems(){
  this.totalItems = this.burgers;
}


  ngOnInit(): void {



  }

}
