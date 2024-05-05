import { ApplicationConfig, isDevMode, ɵprovideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    ɵprovideZonelessChangeDetection(),
    {
        provide: TUI_VALIDATION_ERRORS,
        useValue: {
            minlength: (error: {
                requiredLength: number;
                actualLength: number;
            }) => `Минимальное кол-во символов ${error.requiredLength}. Вы указали ${error.actualLength}`,
            required: 'Обязательное поле'
        }
    },
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
