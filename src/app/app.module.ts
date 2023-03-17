import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeLandingComponent } from './home-landing/home-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeLandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
