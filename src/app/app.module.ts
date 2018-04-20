import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LandingModule } from './landing/landing.module'
import { HomeModule } from './home/home.module'
import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';

const appRoutes: ModuleWithProviders = RouterModule.forRoot([])

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    ProfileModule,
    appRoutes,
    LandingModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
