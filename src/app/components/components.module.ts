import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { ScorecardComponent } from './scorecard/scorecard.component';


@NgModule({
  declarations: [
    ScorecardComponent
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    FormsModule,
    MaterialModule
  ],
  exports: [
  ]
})
export class ComponentsModule { }
