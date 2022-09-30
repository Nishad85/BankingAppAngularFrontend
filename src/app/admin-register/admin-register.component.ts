import { Component, OnInit } from '@angular/core';
import { AdminLogin } from 'AdminLogin';
import { AdminLoginService } from '../admin-login.service';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

admin:AdminLogin = new AdminLogin();
loginService:AuthenticationService;
//declaring properties
adminId : number;
password : string;

  constructor(private adminLoginService: AdminLoginService, loginService:AuthenticationService) { }

  ngOnInit(): void {
  }
  saveAdmin(){
    this.adminLoginService.createAdmin(this.admin).subscribe(data=>{
      alert("admin added!!" + data);
    })
  }

}
