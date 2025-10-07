import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminNavbarComponent } from '../../shared/admin-navbar/admin-navbar.component';

@Component({
  selector: 'app-admin-layouts',
  imports: [RouterOutlet,AdminNavbarComponent],
  templateUrl: './admin-layouts.component.html',
  styleUrl: './admin-layouts.component.css'
})
export class AdminLayoutsComponent {

}
