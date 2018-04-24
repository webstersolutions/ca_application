import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { OfficeSetupRoutingModule } from './office-setup-routing.module';
import { FirmListComponent } from './firms/firm-list/firm-list.component';
import { FirmAddComponent } from './firms/firm-add/firm-add.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { ServiceListComponent } from './services/service-list/service-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    OfficeSetupRoutingModule
  ],
  declarations: [FirmListComponent, FirmAddComponent, DepartmentListComponent, ServiceListComponent]
})
export class OfficeSetupModule { }
