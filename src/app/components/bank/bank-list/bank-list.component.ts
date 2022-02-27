import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Bank } from 'src/app/models/Bank';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.css'],
})
export class BankListComponent implements OnInit {
  bankList: Bank[] = [];

  constructor(private bankService: BankService,
    private toastService: ToastrService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.bankService.getAll().subscribe(success => {
      this.toastService.success('Banks Listed')
      this.bankList = success.result;
    });
  }

  delete(id: string): void {
    if(confirm('Are you sure you want to delete?')){
        this.bankService.delete(id).subscribe(success => {
      this.getAll();
    }, error =>{
      this.toastService.error(error.error.message)
    });
    }
  }
}
