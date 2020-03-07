import { Injectable } from '@angular/core';
import {User} from '../models/user.model'
import {HttpClient, HttpHeaders} from '@angular/common/http'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User={
    username:'',
    email:'',
    password:'',
    name:'',
    dob:new Date,
    ph_number:'',
    blood_grp:'',
    gender:'',
    height:0.0,
    weight:0.0
  }
  

  noAuthHeader = {headers: new HttpHeaders({'NoAuth':'True'})};

  constructor(private http:HttpClient) { }
  registerUser(user : User){
    console.log("DJGRILEJGDSILGJE")
     return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader)
  }

  login(authcreds){
    return this.http.post(environment.apiBaseUrl+'/login',authcreds,this.noAuthHeader)
  }

  getUserProfile(){
    return this.http.get(environment.apiBaseUrl+'/profile');
  }

  getToken(){
    return localStorage.getItem('token')
  }

  setToken(token:string){
    localStorage.set('token',token)
  }

  deleteToken(){
    localStorage.removeItem('token')
  }
  getUserPayload(){
    var token = this.getToken();
    if(token){
      var userPayload = atob(token.split('.')[1])
      return JSON.parse(userPayload)
    }
    else{
      return null
    }
  } 
  isLoggedIn(){
   var userPayload=this.getUserPayload()
   if(userPayload) {
      return userPayload.exp > Date.now()/1000
   }
   else
   return false
  }



}
