import { Injectable } from '@angular/core';
import {User} from '../models/user.model'
import {HttpClient} from '@angular/common/http'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User={
    username:'',
    email:'',
    password:'',
  }

  constructor(private http:HttpClient) { }
  registerUser(user : User){
     return this.http.post(environment.apiBaseUrl+'/register',user)
  }
}
