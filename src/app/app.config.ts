import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { prFormReducer } from './features/pr-creation/store/pr-form/pr-form.reducers';
import { PrFormEffects } from './features/pr-creation/store/pr-form/pr-form.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'light',
                cssLayer: {
                    name: 'primeng',
                    order: 'theme, base, primeng',
                },
            },
        },
    }),
    provideStore({prForm: prFormReducer}),
    provideEffects([PrFormEffects]),
    provideStoreDevtools({
        maxAge:25,
        logOnly:!isDevMode(),
        autoPause:true,
        trace:false,
        traceLimit:75
    })
    
],
};
