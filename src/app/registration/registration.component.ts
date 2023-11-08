import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(public data:DataService, public log:LoggerService){};
   info(){
    this.data.getData();

   }


}
