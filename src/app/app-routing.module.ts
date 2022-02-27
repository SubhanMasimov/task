import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankAddComponent } from './components/bank/bank-add/bank-add.component';
import { BankListComponent } from './components/bank/bank-list/bank-list.component';
import { BankUpdateComponent } from './components/bank/bank-update/bank-update.component';

const routes: Routes = [
  { path: '', component: BankListComponent },
  { path: 'add', component: BankAddComponent },
  { path: ':id', component: BankUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
