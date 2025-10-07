import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-users-layouts',
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './users-layouts.component.html',
  styleUrl: './users-layouts.component.css'
})
export class UsersLayoutsComponent {

}
