import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobListComponent } from './jobs/job-list/job-list.component';
import { ExpenseListComponent } from './expenses/expense-list/expense-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'jobs',
                component: JobListComponent,
                data: {
                    title: 'Job List'
                }
            },
            {
                path: 'expenses',
                component: ExpenseListComponent,
                data: {
                    title: 'Expense List'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class JobsRoutingModule { }