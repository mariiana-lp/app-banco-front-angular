import { Component, OnInit} from '@angular/core';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {

  accounts: Account[];
  errorMessage: string;
  message: string;

  constructor(private accountService: AccountService, private router:Router){}


  ngOnInit(): void {
    this.getAccounts();
  }

  deleteAccount(id: number) {
    this.accountService.deleteAccount(id).subscribe(
      () => {
        console.log("Cuenta eliminada exitosamente");
        this.getAccounts();
        this.message="Eliminado exitoso"
      },
      (error) => {
        console.log("Error al eliminar el cliente:", error);
        this.errorMessage = "No se pudo eliminar la cuenta. Error: " + error.message;
      }
    );
  }
  

  updateAccount(id:number){
    this.router.navigate(['update-account', id]);
  }

  search(name: string) {
    this.accountService.getAccounts().subscribe((data) => {
      this.accounts = data.filter((account) =>
        account.number
      );
    });
  }

  private getAccounts(){
    this.accountService.getAccounts().subscribe(d=>{
      this.accounts = d
    });
  }

}
