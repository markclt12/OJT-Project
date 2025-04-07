import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { TranslateModule } from '@ngx-translate/core';
import { CoreCommonModule } from '@core/common.module';
import { MemberComponent } from './member/member.component';
import { MaintenanceService } from './member/services/maintenance.services';



const routes: Routes = [
  // {
  //   path: 'error',
  //   loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)
  // },
  // {
  //   path: 'customers',
  //   loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  // },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboards',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'members',
    loadChildren: () => import('./member/member.module').then(m => m.MembersModule)
  },
  // {
  //   path: 'maintenance-log',
  //   loadChildren: () => import('./maintenance-log/maintenance-log.module').then(m => m.MaintenanceLogModule)
  // },
 
  // {
  //   path: 'driver',
  //   loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule)
  // },
  // {
  //   path: 'maintenance',
  //   loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule)
  // },
];

@NgModule({
  declarations: [
  
  
  
  ],
  imports: [
    RouterModule.forChild(routes),
    ContentHeaderModule,
    TranslateModule,
    CoreCommonModule,
  ],
  providers: []
})
export class MainModule { }
