import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.css']
})
export class ListTransactionsComponent implements OnInit {

  transactions:Transaction[];
  errorMessage: string;
  message: string;

  constructor(private transactiosService: TransactionService, private router:Router){}

  ngOnInit(): void {
    this.getTransactions();
  }

  deleteTransaction(id: number) {
    this.transactiosService.deleteTransaction(id).subscribe(
      () => {
        console.log("Transaccion eliminada exitosamente");
        this.getTransactions();
        this.message="Eliminado exitoso"
      },
      (error) => {
        console.log("Error al eliminar el transaccion:", error);
        this.errorMessage = "No se pudo eliminar el movimiento. Error: " + error.message;
      }
    );
  }

  search(name: string) {
    this.transactiosService.getTransaction().subscribe((data) => {
      this.transactions = data.filter((account) =>
        account.idTransaction
      );
    });
  }

  private getTransactions(){
    this.transactiosService.getTransaction().subscribe(d=>{
      this.transactions=d;
    })
  }
}
  