import { Injectable, platformCore } from '@angular/core';
import { combineLatest } from 'rxjs';
import { Place } from '../place';

@Injectable({
  providedIn: 'root'
})
export class PressureService {

  constructor() { }

  places:any;

  setData(object:any){
    this.places=object;
    console.log(this.places);
  }


  calculate(){

    const levels:string[]=[];
    this.places.forEach((places:Place) => {
      if(places.altitude<100){
        levels.push(places.name+" has high air pressure");
      }
      else if(places.altitude>=100 && places.altitude<=200){
        levels.push(places.name+" has medium air pressure");
      } else{
        levels.push(places.name + " has low air pressure");
      }      
    }
    );
    return levels;
  }
}
