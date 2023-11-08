import { Component } from '@angular/core';
import { Place } from '../place';

import { PressureService } from '../services/pressure.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  constructor(public pres:PressureService){};

  places:Place[]=[
    {
      name:"Paris",
      altitude:50
    },

    {
      name:"Tbilisi",
      altitude:150
    },

    {
      name:"Barcelona",
      altitude:210
    },

    {
      name:"Berlin",
      altitude:200
    },

  ];


  // receiveData(){
  //   this.pres.setData(this.places);
  // }

  seeResults(){
    this.pres.setData(this.places);
    console.log(this.pres.calculate());
  }

  
}




