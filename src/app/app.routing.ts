import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './views/dashboard/dashboard.component'
// Import Containers
// import { DefaultLayoutComponent } from './containers';
// import { ButtonsModule } from './views/buttons/buttons.module'
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { PepComponent } from './views/pep/pep.component';
import { DashComponent } from './views/dash/dash.component';
import { GcComponent } from './views/gc/gc.component'
import{EmpregisterComponent} from './views/empregister/empregister.component'
import{EmplistComponent} from './views/emplist/emplist.component'
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Dash',
    pathMatch: 'full'

  },
  {
    path: 'Dash',
    component: DashComponent,

  },
  {
    path: 'REG',
    component: EmpregisterComponent,

  },
  {
    path: 'lst',
    component: EmplistComponent,

  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'pep',
    component: PepComponent,
    data: {
      title: 'PEP'
    }
  },
  {
    path: 'GC',
    component: GcComponent,
    data: {
      title: 'Register Page'
    }
  },
  // {
  //   path: '',
  //   component: DefaultLayoutComponent,
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
  //     {
  //       path: 'pepss',
  //       // loadChildren: './views/base/base.module#ButtonsModule'
  //     },
  //     {
  //       path: 'buttons',
  //       // loadChildren: './views/buttons/buttons.module#ButtonsModule'
  //     },
  //     {
  //       path: 'charts',
  //       loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
  //     },
  //     {
  //       path: 'dashboard',
  //       loadChildren: './views/dashboard/dashboard.module#DashboardModule'
  //     },
  //     {
  //       path: 'icons',
  //       loadChildren: './views/icons/icons.module#IconsModule'
  //     },
  //     {
  //       path: 'notifications',
  //       loadChildren: './views/notifications/notifications.module#NotificationsModule'
  //     },
  //     {
  //       path: 'theme',
  //       loadChildren: './views/theme/theme.module#ThemeModule'
  //     },
  //     {
  //       path: 'widgets',
  //       loadChildren: './views/widgets/widgets.module#WidgetsModule'
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
