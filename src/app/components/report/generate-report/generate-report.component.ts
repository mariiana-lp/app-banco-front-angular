import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import * as jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

import { ClientService } from 'src/app/services/client/client.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-generate-report',
  templateUrl: './generate-report.component.html',
  styleUrls: ['./generate-report.component.css']
})
export class GenerateReportComponent implements OnInit {

  transactions:Transaction[];
  clients: Client[];
  filteredInfo: Transaction[] = [];
  transactionDates : Date[];

  constructor(private transactiosService: TransactionService, private clientService: ClientService){}

  ngOnInit(): void {
    this.transactions = [];
    this.getClients();
    this.getTransactions();
  }

  getClients() {
    this.clientService.getClients().subscribe(
      (data) => {
        this.clients = data;
      },
      (error) => {
        console.log('Error al obtener la lista de clientes:', error);
      }
    );
  }

  getTransactionDatesByClient(clientId: number) {
    this.transactionDates = this.transactions
    .filter(item => item.account.client.idPerson === clientId)
    .map(item => item.date);
    
    console.log('Fechas de transacciones:', this.transactionDates);  
  }

  filterByClient(id: number){
    console.log('id persona',id)
    this.filteredInfo= this.transactions.filter(item => {
      return item.account.client.idPerson == id;
    });
    this.getTransactionDatesByClient(id);
  }
  
  
  generatePDF() {
    const doc = new jsPDF.default();
    const columns = ['Fecha', 'Cliente', 'Numero de cuenta', 'Tipo', 'Estado', 'Movimeinto', 'Saldo disponible'];

    const data = this.filteredInfo.map(item => [
      item.date.toString(),
      item.account.client.name,
      item.account.number,
      item.account.type,
      item.account.status,
      item.value,
      item.balance
    ]);

    autoTable(doc, {
      head: [columns],
      body: data
    });

    doc.save('informacion.pdf');
  }


  private getTransactions(){
    this.transactiosService.getTransaction().subscribe(d=>{
      this.transactions=d;
    })
  }

}
