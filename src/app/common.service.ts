import { animateChild } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  createAnimal(animal : any){
    return this._http.post("http://localhost:3000/animals",animal)
  }
  
  updateAnimal(animal : any){
    return this._http.put("http://localhost:3000/animals/" +animal.id, animal)
  }
  deleteAnimal(animal : any){
    return this._http.delete("http://localhost:3000/animals/" +animal.id)
  }

  getAllAnimals(){
    return this._http.get("http://localhost:3000/animals/")
  }

  getLostAnimals(){
    return this._http.get("http://localhost:3000/animals?type=Perte")
  
  }

  getAdoptionAnimals(){
    return this._http.get("http://localhost:3000/animals?type=Adoption")

  }
  
  
}
