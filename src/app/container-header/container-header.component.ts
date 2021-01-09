import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {selectCriticModeText, selectShowCriticMode, selectUsername} from '../store/app.store';
import { updateCriticModeTextAction } from '../store/actions/criticModeText.actions';
import {setSortConditionAction} from '../store/actions/movies.actions';

@Component({
  selector: 'app-container-header',
  templateUrl: './container-header.component.html',
  styleUrls: ['./container-header.component.scss']
})
export class ContainerHeaderComponent implements OnInit {

  public criticModeText$: Observable<string>;
  public username$: Observable<string>;
  public showCriticMode$: Observable<boolean>;

  constructor(private store: Store) { }


  ngOnInit(): void {
    this.criticModeText$ = this.store.select(selectCriticModeText);
    this.username$ = this.store.select(selectUsername);
    this.showCriticMode$ = this.store.select(selectShowCriticMode);
  }

  handleSubmit($event): void {
    this.store.dispatch(updateCriticModeTextAction($event));
  }

  handleSort($event): void {
    this.store.dispatch(setSortConditionAction($event));
  }
}
