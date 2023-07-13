import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';import { Account } from 'src/app/models/account';
import { Client } from 'src/app/models/client';
import { AccountService } from 'src/app/services/account/account.service';
import { ClientService } from 'src/app/services/client/client.service';


@Component({
  selector: 'app-save-account',
  templateUrl: './save-account.component.html',
  styleUrls: ['./save-account.component.css']
})
export class SaveAccountComponent implements OnInit {

  account: Account = new Account();
  clients: Client[];

  constructor(private accountService: AccountService, private router: Router, private clientService: ClientService){}

  ngOnInit(): void {
    this.getClients();
    this.account.client = new Client();
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

  saveAccount(){
    this.account.status = true;
    this.accountService.saveAccount(this.account).subscribe(d=>{
      console.log(d);
      this.goListAccount();
    }, error =>console.log(error));
  }

  goListAccount(){
    this.router.navigate(['/accounts'])
  }


  onSubmit() {
    this.accountService.saveAccount(this.account).subscribe(
      (response) => {
        console.log('Cuenta guardada exitosamente:', response);
        this.router.navigate(['/accounts']);
      },
      (error) => {
        console.log('Error al guardar la cuenta:', error);
      }
    );
  }
}
