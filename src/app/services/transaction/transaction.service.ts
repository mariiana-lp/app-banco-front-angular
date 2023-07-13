import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Transaction } from 'src/app/models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = "http://localhost:8080/api/v1/transactions";

  constructor(private httpClient : HttpClient) { }

  getTransaction():Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(`${this.baseUrl}`)
  }

  saveTransaction(transaction:Transaction):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, transaction);
  }

  updateTransaction(id:number,transaction:Transaction){
    return this.httpClient.put(`${this.baseUrl}/${id}`, transaction);
  }

  deleteTransaction(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  getById(id:number):Observable<Transaction>{
    return this.httpClient.get<Transaction>(`${this.baseUrl}/${id}`);
  }
}

