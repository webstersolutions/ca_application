import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    { path: '/dashboard', title: 'Dashboard', icon: 'ft-zap', class: 'nav-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
    {
        path: '', title: 'Finance Management', icon: 'ft-zap', class: 'nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
        submenu: [
            { path: '/finance-management/invoices', title: 'Invoices', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/finance-management/receipts', title: 'Receipts', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Job Management', icon: 'ft-zap', class: 'nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
        submenu: [
            { path: '/job-management/jobs', title: 'Jobs', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/job-management/expenses', title: 'Expenses', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Clients Management', icon: 'ft-zap', class: 'nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
        submenu: [
            { path: '/clients-management/clients', title: 'Clients', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/clients-management/files', title: 'Files', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Human Resources', icon: 'ft-zap', class: 'nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
        submenu: [
            { path: '/human-resources/employees', title: 'Employees', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] }
        ]
    },
    {
        path: '', title: 'Office setup', icon: 'ft-zap', class: 'nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
        submenu: [
            { path: '/office-setup/firms', title: 'Firms', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/office-setup/departments', title: 'Departments', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] },
            { path: '/office-setup/services', title: 'Services', icon: '', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] }
        ]
    }

];
