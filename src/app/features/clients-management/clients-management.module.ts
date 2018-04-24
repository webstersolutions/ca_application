import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './clients/client-list/client-list.component';
import { FileListComponent } from './files/file-list/file-list.component';
import { ClientsManagementRoutingModule } from './clients-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClientsManagementRoutingModule
  ],
  declarations: [ClientListComponent, FileListComponent]
})
export class ClientsManagementModule { }
