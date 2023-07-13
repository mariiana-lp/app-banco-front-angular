import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/client';
import { ClientService } from '../../../services/client/client.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})

export class ListClientsComponent implements OnInit {

  clients:Client[];
  errorMessage: string;
  message: string;
 


  constructor(private clientService: ClientService, private router:Router){}

  ngOnInit(): void{
    this.getClients();
  }

  deleteClient(id: number) {
    this.clientService.deleteClient(id).subscribe(
      () => {
        console.log("Cliente eliminado exitosamente");
        this.getClients();
        this.message="Eliminado exitoso"
      },
      (error) => {
        console.log("Error al eliminar el cliente:", error);
        this.errorMessage = "No se pudo eliminar el cliente. Error: " + error.message;
      }
    );
  }
  

  updateClient(id:number){
    this.router.navigate(['update-client', id]);
  }

  search(name: string) {
    this.clientService.getClients().subscribe((data) => {
      this.clients = data.filter((client) =>
        client.name.toLowerCase().includes(name.toLowerCase())
      );
    });
  }
  
  private getClients(){
    this.clientService.getClients().subscribe(d =>{
      this.clients = d;
    });
  }

  


  

}
