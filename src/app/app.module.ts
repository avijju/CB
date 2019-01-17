import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
// import { ButtonsModule } from './views/buttons/buttons.module'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { NgMarqueeModule } from 'ng-marquee';
import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';
// import { ButtonsComponent } from './views/buttons/buttons.component'
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSelectModule } from '@angular/material';
import {
  MatInputModule, MatRadioModule, MatPaginatorModule, MatProgressSpinnerModule, MatSlideToggleModule,
  MatSortModule, MatTableModule, MatTooltipModule, MatAutocompleteModule, MatCheckboxModule, MatExpansionModule, MatListModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatGridListModule, MatStepperModule, MatDialogModule, MatDividerModule, MatDatepickerModule, MatNativeDateModule, MatCardModule
}
  from "@angular/material";
// const APP_CONTAINERS = [
//   DefaultLayoutComponent
// ];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,


} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { PepComponent } from './views/pep/pep.component';
// import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DashComponent } from './views/dash/dash.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    BrowserModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    NgMarqueeModule,
    MatInputModule, MatRadioModule, MatPaginatorModule, MatProgressSpinnerModule, MatSlideToggleModule,
    MatSortModule, MatTableModule, MatTooltipModule, MatAutocompleteModule, MatCheckboxModule
    , MatButtonModule, MatDatepickerModule, MatNativeDateModule, BrowserAnimationsModule,
    ReactiveFormsModule, MatCardModule,
    FormsModule, MatSelectModule
  ],
  declarations: [
    AppComponent,
    // ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    PepComponent,
    DashComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
