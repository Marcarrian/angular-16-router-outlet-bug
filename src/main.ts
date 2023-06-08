import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {provideRouter, withHashLocation} from '@angular/router';
import {routes} from './app/app.routes';
import {provideAnimations} from '@angular/platform-browser/animations';
import 'zone.js';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideAnimations(),
  ],
}).catch(err => console.error(err));
