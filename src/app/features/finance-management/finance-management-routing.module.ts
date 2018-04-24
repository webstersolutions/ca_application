import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceListComponent } from './invoices/invoice-list/invoice-list.component';
import { ReceiptListComponent } from './receipts/receipt-list/receipt-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'invoices',
                component: InvoiceListComponent,
                data: {
                    title: 'Invoices List'
                }
            },
            {
                path: 'receipts',
                component: ReceiptListComponent,
                data: {
                    title: 'Receipts List'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FinanceManagementRoutingModule { }