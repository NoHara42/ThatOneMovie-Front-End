import { Component, OnInit } from '@angular/core';
import {registerUserAction, UserPayload} from '../store/actions/user.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-register-container',
  templateUrl: './register-container.component.html',
  styleUrls: ['./register-container.component.scss']
})
export class RegisterContainerComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  handleRegisterUser(userPayload: UserPayload): void {
    this.store.dispatch(registerUserAction(userPayload));
  }
}
