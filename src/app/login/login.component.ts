import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'Customer';
import { UserRegisterService } from '../user-register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginobj:Customer = new Customer;
  checkobj:any;
  //declaring properties
  customerid : number;
  password : string;
  invalidLoginCustomer = false;
  constructor(private userRegisterService: UserRegisterService,private router : Router) { }

  ngOnInit(): void {

    
  }
  gotoDashboard() {
    this.router.navigate(['/dashboard']);
  }

  login()
  {

    this.userRegisterService.validateUser(this.loginobj).subscribe(
      //console.log("Subsribed");
       data=>{
        this.checkobj = data; 
        if(this.checkobj.password == this.loginobj.password){
          sessionStorage.setItem('customerid', this.loginobj.customerid.toString()),
          this.invalidLoginCustomer=false;
          this.router.navigate(['dashboard']);
       }
      else{
        this.invalidLoginCustomer=true;
      }
        // else
        // {
        //   alert("Invalid Credentials")
        //   //this.message=user.message
        //   this.router.navigate(['admin-register'])
        //   console.log("Incorrect credentials");
        // }
      })
}
}
