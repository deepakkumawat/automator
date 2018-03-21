import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { ApplicationsListComponent } from './applications-list/applications-list.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { LoginComponent } from './login/login.component';
import { RegisterService } from './services/register.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    ApplicationsListComponent,
    FooterComponent,
    DashboardMainComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
