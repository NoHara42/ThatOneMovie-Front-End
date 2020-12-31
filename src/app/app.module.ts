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
import { ContainerHeaderComponent } from './container-header/container-header.component';
import { HeaderComponent } from './container-header/header/header.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ContainerCriticModeModalComponent } from './container-header/header/container-critic-mode-modal/container-critic-mode-modal.component';
import { CriticModeModalComponent } from './container-header/header/container-critic-mode-modal/critic-mode-modal/critic-mode-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCommonModule } from '@angular/material/core';
import { MaterialModule } from './material/material.module';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContainerMovieComponent,
    MovieComponent,
    ContainerHeaderComponent,
    HeaderComponent,
    CriticModeModalComponent,
    ContainerCriticModeModalComponent,
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
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule { }
