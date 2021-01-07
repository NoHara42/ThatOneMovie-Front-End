import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMovies } from '../store/app.store';

@Component({
  selector: 'app-container-home',
  templateUrl: './container-home.component.html',
  styleUrls: ['./container-home.component.scss']
})
export class ContainerHomeComponent implements OnInit {

  public movies$: Observable<Array<any>>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    console.log("container got movies");
    this.movies$ = this.store.select(selectMovies);
  }
}

