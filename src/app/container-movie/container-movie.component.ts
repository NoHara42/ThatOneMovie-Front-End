import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMovies } from '../store/app.store';

@Component({
  selector: 'app-container-movie',
  templateUrl: './container-movie.component.html',
  styleUrls: ['./container-movie.component.scss']
})
export class ContainerMovieComponent implements OnInit {


  constructor(private store: Store) { }

  ngOnInit(): void {
  }
}
