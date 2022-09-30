import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from 'Transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-rtgs-banking',
  templateUrl: './rtgs-banking.component.html',
  styleUrls: ['./rtgs-banking.component.css']
})
export class RtgsBankingComponent implements OnInit {
  rtgs: Transaction = new Transaction();
  route:any;
  customeridsessionstorage = sessionStorage.getItem('customerid')
  constructor(private TransactionService: TransactionService, private router :Router) { }

  ngOnInit(): void {
  }

  rtgsContinue(){
    alert(this.rtgs.remarks)
    this.rtgs.status=true;
    this.rtgs.trans_type="RTGS"
    this.TransactionService.addTransactionIMPS(this.rtgs,this.customeridsessionstorage).subscribe(data=>{
    this.router.navigate(['transaction-status']);
   
  })
  

}
}