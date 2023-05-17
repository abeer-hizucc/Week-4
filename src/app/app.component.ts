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
  editedIndices: number[] = [];
  

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
    
  }
  
  isEditing(index: number): boolean {
    return this.editedIndices.includes(index);
  }
  toggleEdit(index: number) {
    if (this.isEditing(index)) {
     
      this.editedIndices = this.editedIndices.filter(i => i !== index); // Remove the index from the editedIndices array
    } else {
      this.editedIndices.push(index); // Add the index to the editedIndices array
    }
  }
  getId(accounts:Accounts):number{
    return accounts.id||0;
  }

  editAccount(id: number, name: string,index:number) {

    this.toggleEdit(index); 
    this.accountsService.editAccount(id, name);
  }
}
