import {Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {ContainerCriticModeModalComponent} from './container-critic-mode-modal/container-critic-mode-modal.component';
import {toggleCriticModeTextActionFalse, toggleCriticModeTextActionTrue} from '../../store/actions/criticModeText.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges{

  @Input() criticModeText: string;
  @Input() username: string;
  @Input() showCriticMode: boolean;
  @Output() criticModeTextEmitter = new EventEmitter<any>();
  @Output() sortEmitter = new EventEmitter<string>();

  sortingOptions = ['Rating', 'Newest', 'Oldest'];

  constructor(private store: Store, public dialog: MatDialog) {
  }

  toggleDialog(): void {
    if (!this.showCriticMode) {
      this.store.dispatch(toggleCriticModeTextActionTrue());
    } else {
      this.store.dispatch(toggleCriticModeTextActionFalse());
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change happened');
    console.log(this.showCriticMode);
    if (changes.hasOwnProperty('showCriticMode')) {
      this.openDialog();
    }
  }

  openDialog(): void {
    if (this.showCriticMode) {
      // case: critic mode activated
      const dialogRef = this.dialog.open(ContainerCriticModeModalComponent, {
        width: '60vw',
      });
      dialogRef.afterOpened().subscribe(() => {
        console.log('The dialog was opened');
      });
      dialogRef.afterClosed().subscribe(() => {
        console.log('The dialog was closed');
      });
    }
  }

  handleSortChange(event: string): void {
    console.log(event);
    this.sortEmitter.emit(event);
  }
}
