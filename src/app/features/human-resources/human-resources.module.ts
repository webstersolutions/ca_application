import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { HumanResourcesRoutingModule } from './human-resources-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HumanResourcesRoutingModule
  ],
  declarations: [EmployeeListComponent]
})
export class HumanResourcesModule { }
