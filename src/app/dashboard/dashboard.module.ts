import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'
import { DashboardComponent } from './dashboard.component';
import { ProductComponent } from './dashboard-components/product/product.component';
import { GraphchartComponent} from './dashboard-components/graphchart/graphchart.component'
import { FormsModule } from '@angular/forms';
import { MutableComponent} from './dashboard-components/mutable/mutable.component';
//import { LogoutComponent } from '../components/logout/logout.component'
//import {JSChartingModule} from 'jscharting/jscharting.module';
//import {JSChartingModule} from './samples/shared/jscharting.module';
//import { ZingchartAngularModule } from 'zingchart-angular';
//import {NgxGaugeModule} from "ngx-gauge";
@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    MutableComponent,
    GraphchartComponent,
    //LogoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    //NgxGaugeModule,
    //ZingchartAngularModule,
    //ZingchartAngularModule
    //JSChartingModule,
   // ZingchartAngularModule,
  ],
  exports: [
    DashboardComponent,
    ProductComponent,
    MutableComponent,
    GraphchartComponent

  ],
  providers: []
})
export class DashboardModule { }
