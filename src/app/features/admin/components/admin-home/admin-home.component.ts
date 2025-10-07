import { Component, inject } from '@angular/core';
// import { CoursesListComponent } from '../courses/courses-list/courses-list.component';
import { CoruseService } from '../../../../core/services/coruse.service';

@Component({
  selector: 'app-admin-home',
  imports: [],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {
 private srv = inject(CoruseService);
  public sharedValue = this.srv.sharedVariable;

}
