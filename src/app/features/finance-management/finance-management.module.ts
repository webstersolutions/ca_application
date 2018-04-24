import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { ReceiptListComponent } from './receipts/receipt-list/receipt-list.component';
import { FinanceManagementRoutingModule } from './finance-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FinanceManagementRoutingModule
  ],
  declarations: [InvoiceListComponent, ReceiptListComponent]
})
export class FinanceManagementModule { }
