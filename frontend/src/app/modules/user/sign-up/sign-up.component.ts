import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service'
import { NgForm , FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerUserForm: FormGroup;
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,

    ) { }

  ngOnInit() {
    this.registerUserForm = this.formBuilder.group({
      username: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      ph_number:[0,Validators.required],
      blood_grp: ['', Validators.required],
      password: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      height:[0, Validators.required],
      weight:[0, Validators.required],
  });
  }

  onSubmit() {
    const momentDate = new Date(this.registerUserForm.value.dob);
    const formattedDate = moment(momentDate).format("YYYY-MM-DD");
    this.registerUserForm.value.dob=formattedDate

    console.log(this.registerUserForm.value)
    this.userService.registerUser(this.registerUserForm.value).subscribe(
      res => {
        console.log(res)
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(this.registerUserForm.value);
      },
      err => {
        console.log(err);
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );
  }

  resetForm(form: FormGroup) {
    this.userService.selectedUser = {
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
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}