import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { authenticateUserActionSuccess } from 'src/app/store/actions/user.actions';
import { selectMovies } from '../../store/app.store';
import { ContainerHomeComponent } from '../container-home.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() movies: Array<any>;

  constructor(private router: Router, private moviesService: MoviesService, private store: Store) { }

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
    this.store.dispatch(authenticateUserActionSuccess("hello professor"));
  }
}
