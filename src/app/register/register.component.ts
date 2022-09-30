import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'User';
import { UserRegisterService } from '../user-register.service';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  user: User = new User();
  route: any;
  
  constructor(private userRegisterService:UserRegisterService,private router : Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname:[, Validators.required],
      middlename:[,],
      lastname:[, Validators.required],
      fathername:[,Validators.required],
      mobilenumber: [, [Validators.required]],
      email: [, [Validators.required]],
      aadhar: [, [Validators.required]],
      date: [, Validators.required],
      resaddrlane1: [, Validators.required],
      resaddrlane2: [,],
      reslandmark : [,],
      rescity: [, Validators.required],
      resstate: [, Validators.required],
      respincode: [, Validators.required],
      peraddrlane1: [, Validators.required],
      peraddrlane2: [,],
      perlandmark : [,],
      percity: [, Validators.required],
      perstate: [, Validators.required],
      perpincode: [, Validators.required],
      occutype: [, Validators.required],
      incsource: [, Validators.required],
      annincome: [, Validators.required]
   
    });
    
  }
  get registerFormControl() {
    return this.form.controls;
  }
  registerUser(){
    this.saveUser();
  }

  saveUser(){
    if (this.form.valid) {
    this.submitted = true;
    this.user.status="Pending"; 
    this.user.netbanking=false;
    this.userRegisterService.createUser(this.user).subscribe((response:any)=>{
      this.router.navigate(['thank-you-register']);
    },(error) => {
      alert(error.error);
    }
    );
    }
  else{
    alert("please fill all the required details!")
  }
  }
  updateAddress(event: any){
    // console.log(event.value)
    if(event.target.checked){
    this.user.peraddrlane1 = this.user.resaddrlane1
    this.user.peraddrlane2 = this.user.resaddrlane2
    this.user.perlandmark = this.user.reslandmark
    this.user.perstate = this.user.resstate
    this.user.percity = this.user.rescity
    this.user.perpincode = this.user.respincode
    }
    else{
    this.user.peraddrlane1 = ""
    this.user.peraddrlane2 = ""
    this.user.perlandmark = ""
    this.user.perstate = ""
    this.user.percity = ""
    this.user.perpincode = ""
    }
  }
}