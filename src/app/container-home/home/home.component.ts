import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {MoviesService} from 'src/app/services/movies.service';
import * as _ from 'lodash';
import {getMoviesAction, Movie} from '../../store/actions/movies.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

  @Input() movies: Array<any>;
  @Input() sortCriteria: string;

  constructor(private router: Router, private moviesService: MoviesService, private store: Store) {
  }

  ngOnInit(): void {
  }

  handleNextPage() {
    this.moviesService.nextPage();
    this.handleGetMovies();
  }

  handleLastPage() {
    this.moviesService.lastPage();
    this.handleGetMovies();
  }

  handleGetMovies() {
    this.store.dispatch(getMoviesAction());
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty('sortCriteria') && changes.sortCriteria.currentValue !== '') {
      const moviesCopy = _.clone(this.movies);
      switch (changes.sortCriteria.currentValue) {
        case 'rating':
          this.movies = moviesCopy.sort((a, b) => Number(b.vote_average) - Number(a.vote_average));
          console.log(this.movies);
          return;
        case 'newest':
          this.movies = moviesCopy.sort((a, b) => {
            return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
          });
          return;
        case 'oldest':
          this.movies = moviesCopy.sort((a, b) => {
            return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
          });
          return;
        default:
          return;
      }
    }
  }
}
