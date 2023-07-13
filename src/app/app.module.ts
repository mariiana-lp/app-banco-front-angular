import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListClientsComponent } from './components/clients/list-clients/list-clients.component';
import {HttpClientModule} from '@angular/common/http';
import { SaveClientComponent } from './components/clients/save-client/save-client.component';
import { ListAccountsComponent } from './components/account/list-accounts/list-accounts.component';
import { ListTransactionsComponent } from './components/transaction/list-transactions/list-transactions.component'
import { FormsModule } from '@angular/forms';
import { UpdateClientComponent } from './components/clients/update-client/update-client.component';
import { UpdateAccountComponent } from './components/account/update-account/update-account.component';
import { SaveAccountComponent } from './components/account/save-account/save-account.component';
import { SaveTransactionComponent } from './components/transaction/save-transaction/save-transaction.component';



@NgModule({
  declarations: [
    AppComponent,
    ListClientsComponent,
    SaveClientComponent,
    SaveAccountComponent,
    SaveTransactionComponent,
    ListAccountsComponent,
    ListTransactionsComponent,
    UpdateClientComponent,
    UpdateAccountComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
