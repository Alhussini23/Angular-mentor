import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { loadInterceptor } from './core/interceptors/load.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),

    provideHttpClient(
      withInterceptors([loadInterceptor])
    ),
    provideAnimations(),
    provideToastr(),
    provideRouter(routes),
    importProvidersFrom(BrowserAnimationsModule)
  ]
};
