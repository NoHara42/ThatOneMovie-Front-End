import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCriticModeText } from '../store/app.store';
import { updateCriticModeTextAction } from '../store/reducers/criticModeText.actions';

@Component({
  selector: 'app-container-header',
  templateUrl: './container-header.component.html',
  styleUrls: ['./container-header.component.scss']
})
export class ContainerHeaderComponent implements OnInit {

  public criticModeText$: Observable<String>;

  constructor(private store: Store) { }


  ngOnInit(): void {
    this.criticModeText$ = this.store.select(selectCriticModeText);
  }

  handleSubmit($event) {
    this.store.dispatch(updateCriticModeTextAction($event));
  }

}
