import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {toggleCriticModeTextActionFalse, updateCriticModeTextAction} from 'src/app/store/actions/criticModeText.actions';

@Component({
  selector: 'app-container-critic-mode-modal',
  templateUrl: './container-critic-mode-modal.component.html',
  styleUrls: ['./container-critic-mode-modal.component.scss']
})
export class ContainerCriticModeModalComponent {

  constructor(private store: Store) { }

  handleSubmitData($event): void {
    console.log('Dispatching:', $event);
    this.store.dispatch(updateCriticModeTextAction($event));
  }

  handleCancelDialog(): void {
    this.store.dispatch(toggleCriticModeTextActionFalse());
  }
}
