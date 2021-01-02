import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import {registerUserAction} from '../../store/actions/user.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user =  new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });


  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  registerUser(): void {
    this.store.dispatch(registerUserAction(this.user.value));
  }
}
