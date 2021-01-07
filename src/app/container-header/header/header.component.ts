import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { authenticateUserActionSuccess } from 'src/app/store/actions/user.actions';
import {ContainerCriticModeModalComponent} from './container-critic-mode-modal/container-critic-mode-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() criticModeText: string;
  @Input() username: string;
  @Output() criticModeTextEmitter = new EventEmitter<any>();
  isCriticModeActive: boolean;

  constructor(private store: Store, public dialog: MatDialog) {
    this.isCriticModeActive = false;
  }

  openDialog(): void {
    if (!this.isCriticModeActive) {
      // case: critic mode activated
      this.isCriticModeActive = true;

      const dialogRef = this.dialog.open(ContainerCriticModeModalComponent, {
        width: '60vw',
      });
      dialogRef.afterOpened().subscribe(() => {
        console.log('The dialog was opened');
      });
      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
      });
    } else {
      // case: critic mode deactivated
      this.isCriticModeActive = false;

      // TODO:
      // reload the movies view once the critic mode has been deactivated
    }
  }
}
