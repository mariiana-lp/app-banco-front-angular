import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';;
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client/client.service';

@Component({
  selector: 'app-save-client',
  templateUrl: './save-client.component.html',
  styleUrls: ['./save-client.component.css']
})
export class SaveClientComponent implements OnInit {

  client: Client = new Client();
  
  constructor(private clientService: ClientService, private router: Router){}

  ngOnInit(): void {
  }

  saveClient(){
    this.client.status = true;
    this.clientService.saveClients(this.client).subscribe(d=>{
      console.log(d);
      this.goListClients();
    }, error =>console.log(error));
  }

  goListClients(){
    this.router.navigate(['/clients'])
  }


  onSubmit(){
    this.saveClient();
  }
}
