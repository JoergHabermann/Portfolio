import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { TranslateModule} from '@ngx-translate/core';
import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideTranslation } from './app.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
              importProvidersFrom([
                HttpClientModule,
                TranslateModule.forRoot(provideTranslation())
              ]),
              provideHttpClient(),
  ]
};
