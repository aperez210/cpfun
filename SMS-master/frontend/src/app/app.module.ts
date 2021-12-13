import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddReportComponent } from './reports/add-report/add-report.component';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { WelcomeComponent } from './welcome/welcome.component';
import { ViewReportsComponent } from './reports/view-reports/view-reports.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule, Routes} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Chart1Component } from './analytics/chart1/chart1.component';
import { Chart2Component } from './analytics/chart2/chart2.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { AddReport2Component } from './reports/add-report2/add-report2.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { ErrorDialogComponent } from './errorHandler/error-dialog/error-dialog.component';
import {ErrorInterceptor} from "./errorHandler/error.interceptor";
import { EditReportComponent } from './reports/edit-report/edit-report.component';
import {CanDeactivateGuard} from "./guards/can-deactivate.guard";
import { LoginComponent } from './login/login.component';
import { StudentProfileComponent } from './s-profile/student-profile.component';
import { TProfileComponent } from './t-profile/t-profile.component';
import { TAnnouncementsComponent } from './t-announcements/t-announcements.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MProfileComponent } from './admin/m-profile/m-profile.component';
import { TSectionsComponent } from './t-sections/t-sections.component';
import { SSectionsComponent } from './s-sections/s-sections.component';
import { STuitionComponent } from './s-tuition/s-tuition.component';
import { MEnrollComponent } from './admin/m-enroll/m-enroll.component';
import { DEnrollComponent } from './d-enroll/d-enroll.component';
import { DProfileComponent } from './d-profile/d-profile.component';
import { DCreateComponent } from './d-create/d-create.component';
import { DViewComponent } from './d-view/d-view.component';
import { AProfileComponent } from './a-profile/a-profile.component';
import { AViewBalancesComponent } from './a-view-balances/a-view-balances.component';
import { AUpdateBalancesComponent } from './a-update-balances/a-update-balances.component';
import { MClassRosterComponent } from './admin/m-classRoster/m-class-roster.component';
import {MViewComponent} from "./admin/m-view/m-view.component";
import {MCreateComponent} from "./admin/m-create/m-create.component";
import {LogoutComponent} from "./logout/logout/logout.component";
import { MManageComponent } from './admin/m-manage/m-manage/m-manage.component';
import { CourseCatalogComponent } from './courseCatalog/course-catalog/course-catalog.component';

// Setup the routes.  If no route is found, then take the user to the NotFoundComponent
const appRoutes: Routes = [
  { path: 'page/addReport',    component: AddReportComponent },
  { path: 'page/addReport2',    component: AddReport2Component },
  { path: 'page/viewReports',  component: ViewReportsComponent },
  { path: 'm-dash/classRoster',  component: MClassRosterComponent },
  { path: 'm-dash/Create',  component: MCreateComponent },
  { path: 'm-dash/Manage',  component: MManageComponent },
  { path: 'm-dash/View',  component: MViewComponent },
  { path: 'courseCatalog',  component: CourseCatalogComponent },
  { path: 'page/editReport/:id', component: EditReportComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'page/chart1',       component: Chart1Component },
  { path: 'page/chart2',       component: Chart2Component },
  { path: '',                  component: WelcomeComponent},
  { path: '**',                component: NotFoundComponent},
  { path: 'logout',                component: LogoutComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AddReportComponent,
    WelcomeComponent,
    ViewReportsComponent,
    NotFoundComponent,
    HeaderComponent,
    NavbarComponent,
    Chart1Component,
    Chart2Component,
    UserNavbarComponent,
    AddReport2Component,
    ErrorDialogComponent,
    EditReportComponent,
    LoginComponent,
    StudentProfileComponent,
    TProfileComponent,
    TAnnouncementsComponent,
    CatalogueComponent,
    MProfileComponent,
    TSectionsComponent,
    SSectionsComponent,
    STuitionComponent,
    MEnrollComponent,
    DEnrollComponent,
    DProfileComponent,
    DCreateComponent,
    DViewComponent,
    AProfileComponent,
    AViewBalancesComponent,
    AUpdateBalancesComponent,
    MClassRosterComponent,
    MViewComponent,
    MCreateComponent,
    LogoutComponent,
    MManageComponent,
    CourseCatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'standard' } },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
