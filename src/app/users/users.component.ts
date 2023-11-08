import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(public Logger:LoggerService){}

  // users : any[]=[
  //   {
  //  id:1,
  //  name:"Luka" ,
  //  lastName:"bitsadze"  
  //   },

  //   {
  //     id:2,
  //     name:"Luka" ,
  //     lastName:"dsags"  
  //      },
  // ]


  // DisplayUsers(){
  //   this.Logger.Info(this.users);
  // }


  people:User[]=[
    {
      id:1,
      name:"Luka",
      lastName:"Bitsadze",
    },

    {
      id:2,
      name:"afha",
      lastName:"afshgf",
    },

    {
      id:3,
      name:"asdgsa",
      lastName:"afdsgs",
    },
  ]



  

}
