import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';
import { Accounts } from './models/Accounts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accounts: Accounts[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
  getId(accounts:Accounts):number{
    return accounts.id||0;
  }

  editAccount(id: number, name: string, status: string) {
    this.accountsService.editAccount(id, name, status);
  }
}
