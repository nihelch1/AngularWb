import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Animal } from '../model/animal';
import { CommonService } from '../shared/common.service';
import { EditFormComponent } from '../edit-form/edit-form.component';

@Component({
  selector: 'app-perte',
  templateUrl: './perte.component.html',
  styleUrls: ['./perte.component.css']
})
export class PerteComponent implements OnInit {

  allAnimals:  Array<Animal> =[];
  isEdit = false;
  animalObj = {
    id: '1',
    image:'',
    nom: '',
    type: '',
    sexe: '',
    age: '',
    desc: '',
    contact: ''
  }
 
  animal : Animal [] ;
  searchValue:any;
  age:any;

  constructor(private http: HttpClient,private commonService: CommonService,private route: ActivatedRoute, private router:Router, private modalService:NgbModal) {
    this.animal = [];
   }

  ngOnInit():void{
    this.commonService.getAllAnimals().subscribe((response : any) => {
      this.animal = response
    });
    this.getLatestLostAnimal();
  }

  editAnimal(animal: Animal) {
    
    const ref=this.modalService.open(EditFormComponent)
    ref.componentInstance.animal=animal;
    console.log(animal);
    ref.result.then((yes)=>{
console.log("yess");
    },
    (cancel)=>{
      console.log("cancel");

    })
  }

  

  getLatestLostAnimal() {
    this.commonService.getLostAnimals().subscribe((response:any) => {
      this.allAnimals = response
    })
  }


  deleteAnimal(animal: Animal) {
    this.commonService.deleteAnimal(animal).subscribe(() => {
      this.getLatestLostAnimal();
    })
  }
 


  

}
