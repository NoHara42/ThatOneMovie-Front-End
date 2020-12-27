import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerMovieComponent } from './container-movie/container-movie.component';
import { MovieComponent } from './container-movie/movie/movie.component';
import { Store, StoreModule } from '@ngrx/store';
import { reducers } from './store/app.store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ContainerMovieComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
      logOnly: environment.production
    }),
  ],
  providers: [Store],
  bootstrap: [ContainerMovieComponent],
})
export class AppModule { }
