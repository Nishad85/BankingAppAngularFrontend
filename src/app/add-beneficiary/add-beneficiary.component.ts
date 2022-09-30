import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Beneficiary } from 'Beneficiary';
import { AddBeneficiaryService } from '../add-beneficiary.service';


@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.component.html',
  styleUrls: ['./add-beneficiary.component.css']
})
export class AddBeneficiaryComponent implements OnInit {
  beneficiary : Beneficiary = new Beneficiary;
  constructor(private addBeneficiaryService:AddBeneficiaryService,private router : Router) { }
  customeridsessionstorage = sessionStorage.getItem('customerid')
  ngOnInit(): void {
  }

  addBeneficiary(){
    this.saveBeneficiary();
  }

  saveBeneficiary(){
    this.addBeneficiaryService.createBeneficiary(this.beneficiary,this.customeridsessionstorage).subscribe(data=>{
      alert(" beneficiary added" +data)
    })
  }

}
