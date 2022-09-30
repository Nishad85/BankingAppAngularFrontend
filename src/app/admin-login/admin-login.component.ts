import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLogin } from 'AdminLogin';
import { AdminLoginService } from '../admin-login.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  
  loginobj:AdminLogin =new AdminLogin();
  checkobj:any;
  //declaring properties
  adminId : number;
  password : string;
  invalidLoginadmin = false;
  route: any;
  
  constructor(private adminLoginService: AdminLoginService,private router : Router) { }


  ngOnInit(): void {
  }

  login()
  {
    
    this.adminLoginService.validate(this.loginobj).subscribe(
      //console.log("Subsribed");
       data=>{
        alert(this.loginobj.adminId);
        this.checkobj = data; 
        if(this.checkobj.password == this.loginobj.password){
          sessionStorage.setItem('username', this.checkobj.getAdminById),
          this.invalidLoginadmin=false;
          this.router.navigate(['admin-dashboard']);
       }
      else{
        this.invalidLoginadmin=true;
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

