import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { ScorecardComponent } from './components/scorecard/scorecard.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: '',
		component: FullComponent,
		canActivate: [AuthGuardService],
		children: [
			{
				path: 'home',
                component:DashboardComponent,
				loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
				canActivateChild: [AuthGuardService],
			},
          {
				path: 'scorecard',
				component: ScorecardComponent
			}
		]
	},
	{
		path: 'login',
		loadChildren: () => import('./login/auth.module').then(m => m.AuthModule)
	},
	
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
