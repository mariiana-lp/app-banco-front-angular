import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/app/models/account';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = "http://localhost:8080/api/v1/account";

  constructor(private httpClient : HttpClient) { }

  getAccounts():Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseUrl}`)
  }

  saveAccount(account:Account):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, account);
  }

  updateAccount(id:number,account:Account){
    return this.httpClient.put(`${this.baseUrl}/${id}`, account);
  }

  deleteAccount(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  getById(id:number):Observable<Account>{
    return this.httpClient.get<Account>(`${this.baseUrl}/${id}`);
  }
}
