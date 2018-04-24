import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientListComponent } from './clients/client-list/client-list.component';
import { FileListComponent } from './files/file-list/file-list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'clients',
                component: ClientListComponent,
                data: {
                    title: 'Client List'
                }
            },
            {
                path: 'files',
                component: FileListComponent,
                data: {
                    title: 'File List'
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ClientsManagementRoutingModule { }