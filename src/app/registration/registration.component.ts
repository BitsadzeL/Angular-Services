import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(public Logger:LoggerService){};
   info(){
    this.Logger.showInfo();

   }


}
