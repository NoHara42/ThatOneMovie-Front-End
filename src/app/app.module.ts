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
import { HomeComponent } from './home/home.component';
import {AuthService} from './services/auth.service';
import { RegisterContainerComponent } from './register-container/register-container.component';
import { RegisterComponent } from './register-container/register/register.component';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './store/effects/user.effects';

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
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [Store, HttpClient, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule { }
