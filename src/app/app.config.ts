import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
 
import { routes } from './app.routes';
import { ApiConfig} from './api-config.service';
 
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), ApiConfig, importProvidersFrom(HttpClientModule)]
};