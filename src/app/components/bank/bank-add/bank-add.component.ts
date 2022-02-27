import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalErrorHandler } from 'src/app/core/errorHandler/GlobalErrorHandler';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-bank-add',
  templateUrl: './bank-add.component.html',
  styleUrls: ['./bank-add.component.css'],
})
export class BankAddComponent implements OnInit {
  bankAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bankService: BankService,
    private toastrService : ToastrService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.createForm()
  }

  createForm(): void {
    this.bankAddForm = this.formBuilder.group({
      info: ['', Validators.required],
      muxbirHesab: ['', Validators.required],
      branchCode: ['', Validators.required],
      voen: ['', Validators.required],
      iban: ['', Validators.required],
      swift: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  add(): void {
    if (this.bankAddForm.valid) {
      let room = Object.assign({}, this.bankAddForm.value);
      this.bankService.add(room).subscribe(() => {
        this.toastrService.success('Successfully added');
        this.router.navigateByUrl('/')
      }, error => {
        new GlobalErrorHandler(this.toastrService).handle(error);
      });
    } else {
      this.toastrService.warning('Please fill areas!');
    }
  }
}
