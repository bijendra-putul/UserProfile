import { Component, OnInit} from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../services/user';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit  {
  loggedInUser = {} as User;
  
  
  constructor(private authService: AuthService, private router: Router) {
  }
  ngOnInit() {
      this.loggedInUser = this.authService.getLoggedInUser();
  }
  logout() {
      this.authService.logoutUser();
      this.router.navigate([this.authService.getLoginUrl()]);
      

  }
}
