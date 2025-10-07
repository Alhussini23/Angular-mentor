import { Component } from '@angular/core';
import { CoruseService } from '../../../../../core/services/coruse.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  title = 'my-app';
  uploadedImageBase64: string | ArrayBuffer | null = null;


  handleFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.uploadedImageBase64 = reader.result;
        console.log(reader.result);
      }

      reader.readAsDataURL(file);
    }
  }
  constructor(
    private serv:CoruseService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ){
    this.createforme()
  };
  courseform!: FormGroup;

  createforme(){
    this.courseform = this.fb.group({
     name:['',[Validators.required , Validators.minLength(3) , Validators.maxLength(50) , Validators.pattern('^[a-zA-Z ]+$') ]],
     price:['',[Validators.required ,  Validators.pattern('^[0-9]+$') ]],
     category:['',[Validators.required , Validators.minLength(3) , Validators.maxLength(50) , Validators.pattern('^[a-zA-Z ]+$') ]],
     description:['',[Validators.required , Validators.minLength(20) , Validators.maxLength(500) , ]],
     img:['',[Validators.required]],
    });
  }
get controles(){
  return this.courseform.controls;
}
  onSupmit(){
    this.courseform.value['img'] = this.uploadedImageBase64;
    this.serv.post(this.courseform.value).subscribe((date:any)=>{
      this.toastr.success('',`New course added`,{

        timeOut: 5000,
        closeButton: true,


    });


    })
    // console.log(this.courseform)
  }
}
