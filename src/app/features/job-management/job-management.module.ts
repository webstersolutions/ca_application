import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { ExpenseListComponent } from './expenses/expense-list/expense-list.component';
import { JobsRoutingModule } from './jobs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    JobsRoutingModule
  ],
  declarations: [JobListComponent, ExpenseListComponent]
})
export class JobManagementModule { }
