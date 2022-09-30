import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  // customer = new Customer() ;
  customer! : Customer;
  cust : Customer = new Customer();
  customeridsessionstorage = sessionStorage.getItem('customerid')
  constructor(private  customerViewService:CustomerService,private  router:Router) { }

  ngOnInit(): void {
    this.viewCustomer();
  }



  viewCustomer(){
    this.customerViewService.getCustomer(this.customeridsessionstorage).subscribe(data =>{
      this.customer=data;
      this.cust=data;
  
  
    });
  }


}
