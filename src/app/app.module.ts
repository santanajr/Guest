import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ModuleWithProviders, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import {LoginService} from "./login.service";
import {AddUserService} from "./adduser/adduser.service";

import {HttpModule} from "@angular/http";
import { AdduserComponent } from './adduser/adduser.component';

export const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path:'adduser', component:AdduserComponent}   
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    routing,
  ],
  providers: [
    LoginService,
    AddUserService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

