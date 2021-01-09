import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GoogleAuthService} from 'ng-gapi';
import {
  socialMediaAuthenticateUserFailedAction,
  socialMediaAuthenticateUserSuccessAction,
  UserPayload
} from '../store/actions/user.actions';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import GoogleUser = gapi.auth2.GoogleUser;

@Injectable()
export class AuthService {

  private readonly BASE_URL = 'http://localhost:5000';
  private readonly REGISTER = '/users';
  private readonly SIGN_IN = '/users/signIn';

  constructor(private httpClient: HttpClient, private googleAuthService: GoogleAuthService, private store: Store, private router: Router) {
  }

  authenticateUser(userPayload: UserPayload): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}${this.SIGN_IN}`, userPayload);
  }

  registerUser(userPayload: UserPayload): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}${this.REGISTER}`, userPayload);
  }

  socialMediaSignIn(): void {
    this.googleAuthService.getAuth().subscribe((auth) => {
      auth.signIn()
        .then(res => {
          const userPayload = {
            name: res.getBasicProfile().getName(),
            imageURL: res.getBasicProfile().getImageUrl(),
            email: res.getBasicProfile().getEmail()
          } as UserPayload;
          this.registerUser(userPayload).subscribe((token: any) => {
            this.router.navigate(['/home']);
            this.store.dispatch(socialMediaAuthenticateUserSuccessAction({username: res.getBasicProfile().getEmail(), token: token.token}));
          });
        }, (err) => this.store.dispatch(socialMediaAuthenticateUserFailedAction(err)));
    });
  }
}
