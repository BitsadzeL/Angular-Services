import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // constructor(public Logger:LoggerService) { }

  Data:any[]=[];

  receiveInfo(object:any){
    this.Data=object;
  }

  displayInfo(){
    return this.Data;
  }
  
}
