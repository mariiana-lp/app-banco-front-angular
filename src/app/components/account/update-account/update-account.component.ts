import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/models/account';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit{

  id:number;
  account: Account = new Account();

  constructor(private accoutService:AccountService, private router: Router, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.accoutService.getById(this.id).subscribe(d=>{
      this.account = d;
    }, error => console.log(error));
  }

  goListAccount(){
    this.router.navigate(['/accounts']);
  }

  onSubmit(){
    this.accoutService.updateAccount(this.id, this.account).subscribe(d=>{
      this.goListAccount();
    }, error => console.log(error));
  }

}
