import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';
import { Transaction } from 'Transaction';
import { TransactionService } from '../transaction.service';
@Component({
  selector: 'app-imps-banking',
  templateUrl: './imps-banking.component.html',
  styleUrls: ['./imps-banking.component.css']
})
export class ImpsBankingComponent implements OnInit {
  imps: Transaction = new Transaction();
  route:any;
  customeridsessionstorage = sessionStorage.getItem('customerid')
  constructor(private TransactionService: TransactionService, private router :Router) { }

  ngOnInit(): void {
  }

  impsContinue(){
    this.imps.trans_type="IMPS";
    this.imps.status=true;
  
   
    this.TransactionService.addTransactionNeft(this.imps,this.customeridsessionstorage).subscribe(data=>{

    this.router.navigate(['transaction-status']);

  })
}

}