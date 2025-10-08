import { Injectable } from '@angular/core';


const AUTH_KEY = 'admin_auth_status';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean = localStorage.getItem(AUTH_KEY) === 'true';

  private readonly ADMIN_USERNAME = 'alhussini-23';
  private readonly ADMIN_PASSWORD = '2002';

  constructor() { }



  login(username: string, password: string): boolean {
    const isValid = username === this.ADMIN_USERNAME && password === this.ADMIN_PASSWORD;

    if (isValid) {
      this.isLoggedIn = true;
      localStorage.setItem(AUTH_KEY, 'true');
      console.log('Login successful. Status saved to localStorage to maintain session.');
      return true;
    }

    this.isLoggedIn = false;
    localStorage.removeItem(AUTH_KEY);
    return false;
  }


  logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem(AUTH_KEY);
    console.log('User logged out successfully and status removed from localStorage.');
  }


  isAuthenticated(): boolean {
    if (this.isLoggedIn) {
      return true;
    }
    const storedStatus = localStorage.getItem(AUTH_KEY) === 'true';
    if (storedStatus) {
      this.isLoggedIn = true;
    }
    return storedStatus;
  }
}
