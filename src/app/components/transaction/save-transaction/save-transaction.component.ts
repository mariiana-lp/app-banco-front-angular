import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';import { Account } from 'src/app/models/account';
import { Client } from 'src/app/models/client';
import { Transaction } from 'src/app/models/transaction';
import { AccountService } from 'src/app/services/account/account.service';
import { ClientService } from 'src/app/services/client/client.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';


@Component({
  selector: 'app-save-transaction',
  templateUrl: './save-transaction.component.html',
  styleUrls: ['./save-transaction.component.css']
})
export class SaveTransactionComponent implements OnInit {

  transaction: Transaction = new Transaction();
  accounts: Account[];

  constructor(private transactionService: TransactionService, private router: Router, private accountService: AccountService){}

  ngOnInit(): void {
    this.getAccounts();
    this.transaction.account = new Account();
  }

  getAccounts() {
    this.accountService.getAccounts().subscribe(
      (data) => {
        this.accounts = data;
      },
      (error) => {
        console.log('Error al obtener la lista de cuentas:', error);
      }
    );
  }

  saveTransaction(){
    this.transactionService.saveTransaction(this.transaction).subscribe(d=>{
      console.log(d);
      this.goListTransaction();
    }, error =>console.log(error));
  }

  goListTransaction(){
    this.router.navigate(['/transactions'])
  }


  onSubmit() {
    this.transactionService.saveTransaction(this.transaction).subscribe(
      (response) => {
        console.log('Movimiento guardado exitosamente:', response);
        this.router.navigate(['/transactions']);
      },
      (error) => {
        console.log('Error al guardar el movimiento:', error);
      }
    );
  }
}
