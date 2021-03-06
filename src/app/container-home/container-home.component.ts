import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { authenticateUserActionSuccess } from '../store/actions/user.actions';
import {selectMovies, selectSortCriteria} from '../store/app.store';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-container-home',
  templateUrl: './container-home.component.html',
  styleUrls: ['./container-home.component.scss']
})
export class ContainerHomeComponent implements OnInit {

  public movies$: Observable<Array<any>>;
  public sortCriteria$: Observable<string>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getMovies();
    this.handleGetMovies();
  }

  getMovies() {
    console.log("container got movies");
    this.movies$ = this.store.select(selectMovies);
    this.sortCriteria$ = this.store.select(selectSortCriteria);
  }

  handleGetMovies() {
    this.store.dispatch(authenticateUserActionSuccess("hello professor"));
  }
}

