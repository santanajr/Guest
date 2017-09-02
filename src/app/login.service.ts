import { AdduserComponent } from './adduser/AddUser.component';
import { AddUserService } from './adduser/adduser.service';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class LoginService {
 

  constructor(public http: Http, public auserservice: AddUserService ) {
    
  }

  login(user: { user: string, password: string }) {
    return this.http.post('http://localhost:3000/login', user);
  }

 
}

