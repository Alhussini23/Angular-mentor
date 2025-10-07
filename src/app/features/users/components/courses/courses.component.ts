import { Component } from '@angular/core';
import { CoruseService } from '../../../../core/services/coruse.service';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courseslist!: any[];

    constructor(private serv: CoruseService ){
      this.DatePudg()
    };
    DatePudg(){
       this.serv.get().subscribe((date:any) =>{
        this.courseslist = date;
      });
    }
}
