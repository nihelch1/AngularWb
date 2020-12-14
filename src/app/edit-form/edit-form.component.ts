import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdoptionComponent } from '../adoption/adoption.component';
import { Animal } from '../model/animal';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})

export class EditFormComponent implements OnInit {
  animal: Animal ;
  editForm: FormGroup;
  isLoading = false;
  allAnimals:  Array<Animal> =[];

  
  
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private comService: CommonService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.setForm()
    console.log(this.animal);

  }

  

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.comService.updateAnimal(this.editForm.value).subscribe((x) => {
     
      this.isLoading = false;
      this.modal.close('Yes');
      console.log(this.editForm);
      
    },
      error => {
        this.isLoading = false;
      });
      
  }

 
  get editFormData() { 
    return this.editForm.controls ; 

  }
 

  private setForm() {
   // console.log(this.selectedUser);
    
   this.editForm = this.formBuilder.group({
    id: [this.animal.id],
    type: [this.animal.type],
    nom: [this.animal.nom],
    age: [this.animal.age],
    image:[this.animal.image],
    desc: [this.animal.desc, Validators.required],
    sexe: [this.animal.sexe, Validators.required],
   // desc: [{ value: this.selectedUser.desc, disabled: true }, [Validators.email, Validators.required]],
   contact: [this.animal.contact, Validators.required]
  });
  }

  

}
