import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientsComponent } from './components/clients/list-clients/list-clients.component';
import { SaveClientComponent } from './components/clients/save-client/save-client.component';
import { ListAccountsComponent } from './components/account/list-accounts/list-accounts.component';
import { ListTransactionsComponent } from './components/transaction/list-transactions/list-transactions.component';
import { UpdateClientComponent } from './components/clients/update-client/update-client.component';
import { UpdateAccountComponent } from './components/account/update-account/update-account.component';
import { SaveAccountComponent } from './components/account/save-account/save-account.component';
import { SaveTransactionComponent } from './components/transaction/save-transaction/save-transaction.component';
import { GenerateReportComponent } from './components/report/generate-report/generate-report.component';

const routes: Routes = [
  {path:'clients', component:ListClientsComponent},
  {path:'save-client', component:SaveClientComponent},
  {path: 'update-client/:id', component:UpdateClientComponent},

  {path:'accounts', component:ListAccountsComponent},
  {path:'save-account', component:SaveAccountComponent},
  {path: 'update-account/:id', component:UpdateAccountComponent},

  {path: 'transactions', component: ListTransactionsComponent},
  {path:'save-transaction', component:SaveTransactionComponent},

  {path:'report', component:GenerateReportComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
