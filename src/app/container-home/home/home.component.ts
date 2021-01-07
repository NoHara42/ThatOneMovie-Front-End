import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectMovies } from '../../store/app.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() movies: Array<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  handleGetMovies() {

  }
}
