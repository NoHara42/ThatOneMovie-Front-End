import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectUsername } from '../store/app.store';
import { updateUserNameAction } from '../store/reducers/user.actions';

@Component({
  selector: 'app-container-movie',
  templateUrl: './container-movie.component.html',
  styleUrls: ['./container-movie.component.scss']
})
export class ContainerMovieComponent implements OnInit {

  public username$: Observable<String>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.username$ = this.store.select(selectUsername);
  }

  handleClick($event) {
    this.store.dispatch(updateUserNameAction($event));
  }

}
