import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user';

const USERS = [
	new User(1, 'admin', 'admin', 'ADMIN'),
	new User(2, 'kadin', 'kadin', 'USER')
];
let usersObservable = of(USERS);

@Injectable()
export class AuthService {
	public redirectUrl: string = '/';
	public loginUrl: string = '/login';
	public isloggedIn: boolean = false;
	public loggedInUser = {} as User;
	logoutSuccess = false;
    logoutUser$: any;
	getAllUsers(): Observable<User[]> {
		return usersObservable;
	}
	isUserAuthenticated(username: string, password: string): Observable<boolean> {
		return this.getAllUsers().pipe(
			map(users => {
				let user = users.find(user => (user.username === username) && (user.password === password));
				if (user) {
					this.isloggedIn = true;
					this.loggedInUser = user;
				} else {
					this.isloggedIn = false;
				}
				return this.isloggedIn;
			}));
	}
	isUserLoggedIn(): boolean {
		return this.isloggedIn;
	}
	getRedirectUrl(): string {
		return this.redirectUrl;
	}
	setRedirectUrl(url: string): void {
		this.redirectUrl = url;
	}
	getLoginUrl(): string {
		return this.loginUrl;
	}
	getLoggedInUser(): User {
		return this.loggedInUser;
	}
	logoutUser(): void {
		this.isloggedIn = false;
	}
} 