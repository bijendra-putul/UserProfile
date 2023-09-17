import { NgModule }   from '@angular/core';
import { CommonModule }   from '@angular/common';
import { ReactiveFormsModule }    from '@angular/forms';

import { LoginComponent }  from './login.component';
import { AuthRoutingModule }  from './auth-routing.module';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [     
    CommonModule,
	ReactiveFormsModule,
	AuthRoutingModule,
    MaterialModule
  ], 
  declarations: [
        LoginComponent
  ]
})
export class AuthModule { } 