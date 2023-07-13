import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../models/client';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = "http://localhost:8080/api/v1/client";

  constructor(private httpClient : HttpClient) {

   }

  getClients():Observable<Client[]>{
    return this.httpClient.get<Client[]>(`${this.baseUrl}`)
  }

  saveClients(client:Client):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, client);
  }

  updateClient(id:number,client:Client){
    return this.httpClient.put(`${this.baseUrl}/${id}`, client);
  }

  deleteClient(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  getById(id:number):Observable<Client>{
    return this.httpClient.get<Client>(`${this.baseUrl}/${id}`);
  }
  
}
