import {Component, OnInit} from '@angular/core';
import {authenticateUserAction, socialMediaAuthenticateUserAction, UserPayload} from '../store/actions/user.actions';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectError} from '../store/app.store';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {

  error$: Observable<string>;

  constructor(private store: Store, private authService: AuthService) { }

  ngOnInit(): void {
    this.error$ = this.store.select(selectError);
  }

  handleUserSignIn(userPayload: UserPayload): void {
    this.store.dispatch(authenticateUserAction(userPayload));
  }

  handleSocialMediaSignIn(): void {
    this.authService.socialMediaSignIn();
  }
}
