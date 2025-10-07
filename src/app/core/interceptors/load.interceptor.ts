import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { SpinnerService } from '../services/spinner.service';
import { finalize } from 'rxjs';

export const loadInterceptor: HttpInterceptorFn = (req, next) => {

  const SpinnerSev = inject(SpinnerService);
  SpinnerSev.busy();

  return next(req).pipe(finalize(()=>SpinnerSev.hide()))

};
