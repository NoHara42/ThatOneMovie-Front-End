import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {selectCriticModeText, selectUsername} from '../store/app.store';
import { updateCriticModeTextAction } from '../store/actions/criticModeText.actions';

@Component({
  selector: 'app-container-header',
  templateUrl: './container-header.component.html',
  styleUrls: ['./container-header.component.scss']
})
export class ContainerHeaderComponent implements OnInit {

  public criticModeText$: Observable<string>;
  public username$: Observable<string>;

  constructor(private store: Store) { }


  ngOnInit(): void {
    this.criticModeText$ = this.store.select(selectCriticModeText);
    this.username$ = this.store.select(selectUsername);
  }

  handleSubmit($event): void {
    this.store.dispatch(updateCriticModeTextAction($event));
  }

}
