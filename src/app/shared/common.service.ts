import { animateChild } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../model/animal';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }

  createAnimal(animal : Animal){
    return this._http.post("http://localhost:3000/animals",animal)
  }
  
  updateAnimal(animal : Animal){
    return this._http.put("http://localhost:3000/animals/" +animal.id, animal)
  }

 
  deleteAnimal(animal : Animal){
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
  getFilterAnimal(age : string){
    return this._http.get("http://localhost:3000/animals?age="+age)

  }
  
  
}
