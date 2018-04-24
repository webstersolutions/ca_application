import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirmListComponent } from "app/features/office-setup/firms/firm-list/firm-list.component";
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { FirmAddComponent } from './firms/firm-add/firm-add.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'firms',
                component: FirmListComponent,
                data: {
                    title: 'Firms List'
                }
            },
            {
                path: 'firms/add',
                component: FirmAddComponent,
                data: {
                    title: 'Firm Add'
                }
            },
            {
                path: 'departments',
                component: DepartmentListComponent,
                data: {
                    title: 'Department List'
                }
            },
            {
                path: 'services',
                component: ServiceListComponent,
                data: {
                    title: 'Service List'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class OfficeSetupRoutingModule { }