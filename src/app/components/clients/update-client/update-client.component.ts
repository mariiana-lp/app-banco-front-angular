import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client/client.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id:number;
  client:Client = new Client();

  constructor(private clientService:ClientService,private router:Router,private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getById(this.id).subscribe(dato =>{
      this.client = dato;
    },error => console.log(error));
  }

  goListClient(){
    this.router.navigate(['/clients']);
  }

  onSubmit(){
    this.clientService.updateClient(this.id,this.client).subscribe(dato => {
      this.goListClient();
    },error => console.log(error));
  }
}
