import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal';
import { CommonService } from '../common.service';
declare const L :any;

@Component({
  selector: 'app-adoption',
  templateUrl: './adoption.component.html',
  styleUrls: ['./adoption.component.css']
})
export class AdoptionComponent implements OnInit {
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

  constructor(private commonService: CommonService,private route: ActivatedRoute, private router:Router) {
    this.animal = [];
   }

  ngOnInit():void{
    this.commonService.getAllAnimals().subscribe((response : any) => {
      this.animal = response
    });
    this.getLatestAnimal();
  }

  getLatestAnimal() {
    this.commonService.getAllAnimals().subscribe((response) => {
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
