import { Component, OnInit } from '@angular/core';
import { Animal } from './model/animal';
import { CommonService } from './shared/common.service';

declare const L: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SaveAnimals';
  
  
  constructor(private cm : CommonService  ){ }

    ngOnInit()  {
     

    }

  

 

}
