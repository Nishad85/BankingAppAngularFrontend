import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';
import { AdminService } from '../admin.service';
import { AuthenticationService } from '../authentication.service';
declare var $: any;
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
loginService: AuthenticationService;
users!:User[] 
user:User=new User()
  constructor( loginService:AuthenticationService, private adminservice: AdminService, private router:Router) { }

  ngOnInit(): void {
    this.getUserList()
  }
  createCustomer(userid:number){
    this.user.status='approved';
    this.adminservice.createCustomer(this.user,userid).subscribe(data=>{
      alert("Customer Created");
      // this.getUser();
    })
  }
  // enableNet(userid:number){
  //   this.user.netbanking=true;
  //   this.adminservice.setNetBank(this.customer,userid).subscribe(
  //     data=>{
  //       alert("Netbanking enabled");
  //     }
  //   );

  // }
  // private getUser(){
  //   this.userService.getUserList().subscribe(data=>{this.students=data;})
  // }
  private getUserList(){
    this.adminservice.getUserList().subscribe(data=>{this.users=data;})
  }
  declineUser(userid:number){
   
    this.adminservice.removeUser(this.user,userid).subscribe(
      data=>{
        alert("from backend")
      }
    )
  }
}