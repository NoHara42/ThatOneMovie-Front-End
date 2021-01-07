import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContainerMovieComponent} from './container-movie/container-movie.component';
import {MovieComponent} from './container-movie/movie/movie.component';
import {Store, StoreModule} from '@ngrx/store';
import {reducers} from './store/app.store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'src/environments/environment';
import {CommonModule} from '@angular/common';
import {ContainerHeaderComponent} from './container-header/container-header.component';
import {HeaderComponent} from './container-header/header/header.component';
import {ContainerCriticModeModalComponent} from './container-header/header/container-critic-mode-modal/container-critic-mode-modal.component';
import {CriticModeModalComponent} from './container-header/header/container-critic-mode-modal/critic-mode-modal/critic-mode-modal.component';
import {MaterialModule} from './material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginContainerComponent} from './login-container/login-container.component';
import {LoginComponent} from './login-container/login/login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './container-home/home/home.component';
import {AuthService} from './services/auth.service';
import { RegisterContainerComponent } from './register-container/register-container.component';
import { RegisterComponent } from './register-container/register/register.component';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './store/effects/user.effects';
import { GoogleApiModule, NG_GAPI_CONFIG, NgGapiClientConfig } from 'ng-gapi';
import { ContainerHomeComponent } from './container-home/container-home.component';

const gapiClientConfig: NgGapiClientConfig = {
  client_id: '210021820396-1nnh4ocv1sks776cc9tam33gf37en6jp.apps.googleusercontent.com',
  discoveryDocs: ['https://analyticsreporting.googleapis.com/$discovery/rest?version=v4'],
  scope: [
    'https://www.googleapis.com/auth/analytics.readonly',
    'https://www.googleapis.com/auth/analytics'
  ].join(' ')
};

@NgModule({
  declarations: [
    AppComponent,
    ContainerMovieComponent,
    MovieComponent,
    ContainerHeaderComponent,
    HeaderComponent,
    CriticModeModalComponent,
    ContainerCriticModeModalComponent,
    LoginContainerComponent,
    LoginComponent,
    HomeComponent,
    RegisterContainerComponent,
    RegisterComponent,
    ContainerHomeComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([
      UserEffects
    ]),
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    }),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [Store, HttpClient, AuthService],
  bootstrap: [ContainerHomeComponent],
})
export class AppModule { }
