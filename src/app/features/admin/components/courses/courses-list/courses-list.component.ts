
import { Component, inject } from '@angular/core';
import { CoruseService } from '../../../../../core/services/coruse.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-courses-list',
  imports: [RouterLink,RouterModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {

  private srv = inject(CoruseService)
  courseslist!: any[];

  constructor(private serv: CoruseService ,private toaster: ToastrService){
    this.DatePudg()
  };
  DatePudg(){
     this.serv.get().subscribe((date:any) =>{
      this.courseslist = date;
      if (this.courseslist) {
          const courseLength = this.courseslist.length;
          this.srv.updateVariable(courseLength);
      };
    });
  }
  remove(id:any){
    this.serv.delete(id).subscribe((date:any)=>{
      this.toaster.error('','Course deleted',{
        timeOut: 5000,
        closeButton: true,
      })
      this.DatePudg()
    })
  }
}

