import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MoviesActions } from '../store/actions/movies.actions';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly BASE_URL = 'http://localhost:5000';
  private PAGE_NUMBER = '1';

  constructor(private router: Router, private store: Store, private httpClient: HttpClient) { }

  getMoviesFromBackend() {
    return this.httpClient.get(`${this.BASE_URL}/movies/${this.PAGE_NUMBER}`);
  }
}
