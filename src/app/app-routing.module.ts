import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinesAdminComponent } from './wines-admin/wines-admin.component';
import { WinesMainComponent } from './wines-main/wines-main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wines',
    pathMatch: 'full'
  },
  {
    path: 'wines',
    component: WinesMainComponent
  },
  {
    path: 'admin',
    component: WinesAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
