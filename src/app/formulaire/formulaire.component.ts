import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

declare const L: any;


@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  public ImageUrl = "";
  public Fileimage: any;

  onFileChange(event: any) {
    this.Fileimage = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.ImageUrl = event.target.result;
    }
    reader.readAsDataURL(this.Fileimage);
  }
  

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


  constructor(private commonService: CommonService, private _activatedRoute: ActivatedRoute
    , private _router: Router) { }

    check(animal:any){
      if(animal.type == "Perte"){

        this.perte();
      }else if (animal.type == "Adoption"){
        this.adoption();
      }

  }



  adoption(): void {
    this._router.navigate(['/adoption']);
  }
  perte(): void {
    this._router.navigate(['/perte']);
  }

  ngOnInit() {
    if (!navigator.geolocation) {
      console.log('location is not supported');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`);
      let mymap = L.map('map').setView(latLong, 13);
      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3VicmF0MDA3IiwiYSI6ImNrYjNyMjJxYjBibnIyem55d2NhcTdzM2IifQ.-NnMzrAAlykYciP4RP9zYQ',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken: 'your.mapbox.access.token',
        }
      ).addTo(mymap);
      let marker = L.marker(latLong).addTo(mymap);



    });
    this.watchPosition();

  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
        );
        if (position.coords.latitude === desLat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }





  addAnimal(animalObj: any) {
    console.log(animalObj)
    this.commonService.createAnimal(animalObj).subscribe((response) => {
     

    })
  }




 


}
