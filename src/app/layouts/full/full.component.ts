import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../services/user';
import {formatDate} from '@angular/common';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {
  tabLoadTimes: Date[] = [];
  search: boolean = false;
  loggedInUser = {} as User;
  isloggedIn = false;
  logoutSuccess = false;
  //:any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, 
    private router:Router, 
    private authService: AuthService,
    ) { 
      
    }
    ngOnInit() {
        this.loggedInUser = this.authService.getLoggedInUser();
        
    }
    getTimeLoaded(index: number) {
      if (!this.tabLoadTimes[index]) {
        this.tabLoadTimes[index] = new Date();
      }
  
      return this.tabLoadTimes[index];
    }
    
    logout() {
      this.authService.logoutUser();
      this.router.navigate([this.authService.getLoginUrl()]);
      this.authService.isloggedIn = true;
      this.logoutSuccess = true;
      console.log('logout' + this.isloggedIn);
      console.log('logout' + this.logoutSuccess);
        
    }
  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
    {
      link: "/home",
      icon: "home",
      menu: "Dashboard",
    },
    {
      link: "/sampleoption",
      icon: "disc",
      menu: "Sample Option",
    },
   
    
  ]

}
