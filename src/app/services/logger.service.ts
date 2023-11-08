import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {


  constructor(public dataService:DataService) { }
  Print(object:any){
    this.dataService.getData();
  }
}
