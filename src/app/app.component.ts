import {Component, OnInit} from '@angular/core';
import {selectToken} from './store/app.store';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ThatOneMovie-Front-End';
}
