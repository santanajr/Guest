import { AdduserComponent } from './AddUser.component';
import { LoginComponent } from './../login/login.component';
import {Injectable} from '@angular/core';
import { Http, RequestOptions, Headers, URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/map';

interface Saida 
{
  user: string;
  password: string;
  age : number;
  name : string;
}


@Injectable()
export class AddUserService {

  AllUser : Saida;

  constructor(public http: Http) {

  }

  AddUser(AddUser: { user: string, password: string, age : number , name : string }) {
    return this.http.post('http://localhost:3000/adduser', AddUser);
  }

  ListUser() 
  {
    return this.http.get('http://localhost:3000/adduser').map((data) => data.json() as Saida[] )

  }

}
