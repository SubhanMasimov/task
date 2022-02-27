import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Bank } from '../models/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService extends BaseService<Bank> {

  constructor(protected override httpClient: HttpClient) { 
    super(httpClient, 'bank') 
  }

}
