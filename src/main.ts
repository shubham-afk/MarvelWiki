import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { MarvelpageComponent } from './app/marvelpage/marvelpage.component';
import { bootstrapApplication } from '@angular/platform-browser';
import {importProvidersFrom} from '@angular/core';
import {routes} from './app/app-routing.module';

bootstrapApplication(AppComponent,{
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
  ]
})
  .catch(err => console.error(err));
