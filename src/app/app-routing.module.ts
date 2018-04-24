import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { TwoColumnsLayoutComponent } from './core/layouts/2-columns-layout/2-columns-layout.component';
import { TWO_COLUMN_ROUTES } from "./shared/routes/2-columns-layout.routes";

import { AuthGuard } from './shared/auth/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: '', component: TwoColumnsLayoutComponent, data: { title: '' }, children: TWO_COLUMN_ROUTES, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
