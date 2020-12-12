import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
 

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  showForm(){
    this.router.navigate(['Formulaire'],{relativeTo: this.route});
  }

}
