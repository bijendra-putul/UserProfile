import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullComponent } from './layouts/full/full.component';

import {AuthGuardService} from './services/auth-guard.service';
import {AuthService } from './services/auth.service';
//import { DashboardComponent } from './dashboard/dashboard.component';

// Modules
import { DashboardModule } from './dashboard/dashboard.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    //DashboardComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DashboardModule,
    ComponentsModule,
    FormsModule,
    MaterialModule,
    FeatherModule.pick(allIcons),
  ],
  providers: [AuthService,
    AuthGuardService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
