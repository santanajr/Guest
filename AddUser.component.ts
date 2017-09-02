import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AddUserService} from "./adduser.service";

interface AddUser 
{
  user: string;
  password: string;
  age : number;
  name : string;
}


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})

export class AdduserComponent implements OnInit {

  AddUserForm: FormGroup;
  Useradd : AddUser;

  constructor(formBuilder: FormBuilder,
              public AddUserSvc: AddUserService) 
    {
    this.AddUserForm = formBuilder.group({
      name:['', Validators.compose([Validators.required])],
      age: ['', Validators.compose([Validators.required])],
      user: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() {

  }

  onSubmit({value, valid}: { value: AddUser, valid: boolean }) {
    this.AddUserSvc.AddUser(value).subscribe(
      data => alert("Cadastro efetuado"),
      error => alert("Problema no cadastro")
    );
  }

}
