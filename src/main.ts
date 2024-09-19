import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ApplicationConfig } from '@angular/core';
import { appConfig } from './app/app.config';

// Use `bootstrapApplication` to initialize your Angular app
bootstrapApplication(AppComponent, appConfig)
  .catch((err: any) => console.error('Error bootstrapping application:', err));
