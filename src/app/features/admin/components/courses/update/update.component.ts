import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoruseService } from '../../../../../core/services/coruse.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  id: any;
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
    private activeRoute: ActivatedRoute,
    private serv: CoruseService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.serv.getId(this.id).subscribe((date:any)=>{
      Reflect.deleteProperty(date , 'img')
      this.courseform.patchValue(date);

    })
    this.createforme()
  };
  courseform!: FormGroup;

  createforme() {
    this.courseform = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]+$')]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      category: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]+$')]],
      description: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(500),]],
      img: ['', [Validators.required]],
    });
  }
  get controles() {
    return this.courseform.controls;
  }
  onSupmit() {
    this.courseform.value['img'] = this.uploadedImageBase64;
    this.serv.ebdit(this.courseform.value , this.id).subscribe((date: any) => {
      this.toastr.success('', `New course update`, {

        timeOut: 5000,
        closeButton: true,


      });


    })
  }
}
