import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   constructor(public Logger:LoggerService) { }

  Data:any[]=[];

  setData(object:any){
    this.Data=object;
  }

  getData(){
    this.Logger.Print(this.Data);
  }
  
}
