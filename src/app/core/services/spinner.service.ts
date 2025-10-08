import { Injectable } from '@angular/core';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinnerServer: NgxSpinnerService) { };

  busy() {
    this.spinnerServer.show();
  }
  hide() {
    setTimeout(() => {

        this.spinnerServer.hide();
      }, 2000);
  }
}
