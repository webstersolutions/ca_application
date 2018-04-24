import { Routes, RouterModule } from '@angular/router';

export const TWO_COLUMN_ROUTES: Routes = [
    {
        path: 'dashboard',
        loadChildren: './features/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'job-management',
        loadChildren: './features/job-management/job-management.module#JobManagementModule'
    },
    {
        path: 'finance-management',
        loadChildren: './features/finance-management/finance-management.module#FinanceManagementModule'
    },
    {
        path: 'clients-management',
        loadChildren: './features/clients-management/clients-management.module#ClientsManagementModule'
    },
    {
        path: 'human-resources',
        loadChildren: './features/human-resources/human-resources.module#HumanResourcesModule'
    },
    {
        path: 'office-setup',
        loadChildren: './features/office-setup/office-setup.module#OfficeSetupModule'
    }
];