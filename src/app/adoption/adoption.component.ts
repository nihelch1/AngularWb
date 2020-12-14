import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, throwError } from 'rxjs';
import { Animal } from '../model/animal';
import { CommonService } from '../shared/common.service';
import { EditFormComponent } from '../edit-form/edit-form.component';
declare const L :any;

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {
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
    contact: '',
    position: ''
  }
 
  animal : Animal [] ;
  searchValue:any;
  age:any;

  constructor(private http: HttpClient,private commonService: CommonService,private route: ActivatedRoute, private router:Router,
    private modalService:NgbModal) {
    this.animal = [];
   }

  ngOnInit():void{
    this.commonService.getAllAnimals().subscribe((response : any) => {
      this.animal = response
      
    });
    this.getLatestAdoptionAnimal();
    
  }


  getLatestAnimal() {
    this.commonService.getAllAnimals().subscribe((response:any) => {
      this.allAnimals = response
    })
   

  }

  getLatestAdoptionAnimal() {
    this.commonService.getAdoptionAnimals().subscribe((response:any) => {
      this.allAnimals = response
    })
   

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
    
    
    //this.isEdit = true;
    //this.animalObj = animal;
  }

  filterAnimals(){
    console.log(this.age);
     this.commonService.getFilterAnimal(this.age).subscribe((data: any) => {
       this.allAnimals = data
     console.log(this.animal);
     });
   }

  deleteAnimal(animal: Animal) {
    this.commonService.deleteAnimal(animal).subscribe(() => {
      this.getLatestAdoptionAnimal();
    })
  }
 

  
  

}
