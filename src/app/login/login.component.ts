import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  invalidCredentialMsg = '';
  isloggedIn = false;
  logoutSuccess = false;
  

	constructor(private authService: AuthService, private router: Router) {
		
	}
	ngOnInit() {
	//this.onFormSubmit();
	
	}
	loginForm = new FormGroup({
		username: new FormControl(),
		password: new FormControl()
	});
	onFormSubmit() {
		let uname = this.loginForm.get('username')?.value;
		let pwd = this.loginForm.get('password')?.value;
		this.authService.isUserAuthenticated(uname, pwd).subscribe(
     
			authenticated => {
            console.log(uname);
				if (authenticated) {
					let url = this.authService.getRedirectUrl();
					console.log('Redirect Url:' + url);
					this.isloggedIn = true;
					console.log('R---' + this.isloggedIn);
					this.router.navigate([url]);
					
					  
					   //console.log(this.getLoggedInUser())
					
				} else {
					this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
					
				}
			}
		);
	}
	
	get islogeedValue():boolean{
		return this.authService.isloggedIn;
	}
	goBack(){
		location.reload()
    }
	
	

}
