import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'employees',
                component: EmployeeListComponent,
                data: {
                    title: 'Employee List'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HumanResourcesRoutingModule { }