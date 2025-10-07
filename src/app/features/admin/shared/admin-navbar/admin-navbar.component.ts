import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {
  constructor(private authService: AuthService, private router: Router) {
  }


  logout(): void {
    this.authService.logout();
    this.router.navigate(['admin/login']);

    console.log('User logged out and redirected.');
  }
}
