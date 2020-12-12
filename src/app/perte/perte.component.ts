import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-perte',
  templateUrl: './perte.component.html',
  styleUrls: ['./perte.component.css']
})
export class PerteComponent implements OnInit {

  allAnimals: any;
  isEdit = false;
  animalObj = {
    id: '1',
    image:'',
    nom: '',
    type: '',
    sexe: '',
    age: '',
    desc: '',
    contact: '',
    position: ''
  }
 
  animal : Animal [] ;
  searchValue:any;

  constructor(private http: HttpClient,private commonService: CommonService,private route: ActivatedRoute, private router:Router) {
    this.animal = [];
   }

  ngOnInit():void{
    this.commonService.getAllAnimals().subscribe((response : any) => {
      this.animal = response
    });
    this.getLatestLostAnimal();
  }


  getLatestAnimal() {
    this.commonService.getAllAnimals().subscribe((response) => {
      this.allAnimals = response
    })
  }

  getLatestLostAnimal() {
    this.commonService.getLostAnimals().subscribe((response) => {
      this.allAnimals = response
    })
  }

  editAnimal(animal: any) {
    this.isEdit = true;
    this.animalObj = animal;
  }

  deleteAnimal(animal: any) {
    this.commonService.deleteAnimal(animal).subscribe(() => {
      this.getLatestAnimal();
    })
  }
  updateAnimal() {
    this.isEdit = !this.isEdit;
    this.commonService.updateAnimal(this.animalObj).subscribe(() => {
      this.getLatestAnimal();
    })
  }

  details(){
    this.router.navigate(['details'],{relativeTo: this.route});
  }

  

}
