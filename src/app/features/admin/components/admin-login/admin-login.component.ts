import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username = '';
  password = '';
  errorMessage: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastrlogin: ToastrService
  ) { }


  onLogin(): void {
    this.errorMessage = null;

    const loggedIn = this.authService.login(this.username, this.password);

    if (loggedIn) {
      this.router.navigate(['/admin']);

      this.toastrlogin.success('', `Logged in successfully`, {

        timeOut: 5000,
        closeButton: true,

      })


    } else {
      this.toastrlogin.error('', `username or password`, {

        timeOut: 5000,
        closeButton: true,

      })
    }
  }
}
