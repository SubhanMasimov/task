import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlobalErrorHandler } from 'src/app/core/errorHandler/GlobalErrorHandler';
import { Bank } from 'src/app/models/Bank';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-bank-update',
  templateUrl: './bank-update.component.html',
  styleUrls: ['./bank-update.component.css'],
})
export class BankUpdateComponent implements OnInit {
  bankUpdateForm: FormGroup;
  bank: Bank;

  constructor(
    private bankService: BankService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute.params) {
      this.activatedRoute.params.subscribe((params) => {
        this.getBankById(params['id']);
      });
    }
    this.createBankUpdateForm();
  }

  createBankUpdateForm(): void {
    this.bankUpdateForm = this.formBuilder.group({
      id: ['', Validators.required],
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

  getBankById(id: string): void {
    this.bankService.getById(id).subscribe((success) => {
      this.bank = success.result;

      this.bankUpdateForm.setValue({
        id: this.bank.id,
        info: this.bank.info,
        muxbirHesab: this.bank.muxbirHesab,
        branchCode: this.bank.branchCode,
        voen: this.bank.voen,
        iban: this.bank.iban,
        swift: this.bank.swift,
        city: this.bank.city,
        address: this.bank.address,
        phone: this.bank.phone,
      });
    });
  }

  update(): void {
    if (confirm('Are you sure you want to update?')) {
      if (this.bankUpdateForm.valid) {
        let entityModel = Object.assign({}, this.bankUpdateForm.value);
        this.bankService.update(entityModel).subscribe(
          () => {
            this.toastrService.success('Updated successfully');
            this.router.navigateByUrl('/');
          },
          (errorResponse: any) => {
            new GlobalErrorHandler(this.toastrService).handle(errorResponse);
          }
        );
      } else {
        this.toastrService.warning('Please fill areas!');
      }
    }
  }
}
