import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankListComponent } from './components/bank/bank-list/bank-list.component';
import { BankAddComponent } from './components/bank/bank-add/bank-add.component';
import { BankUpdateComponent } from './components/bank/bank-update/bank-update.component';

@NgModule({
  declarations: [
    AppComponent,
    BankListComponent,
    BankAddComponent,
    BankUpdateComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      timeOut: 1500
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
