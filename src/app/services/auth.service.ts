import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import GoogleUser = gapi.auth2.GoogleUser;
import {GoogleAuthService} from 'ng-gapi';
import {
  socialMediaAuthenticateUserFailedAction,
  socialMediaAuthenticateUserSuccessAction,
  UserPayload
} from '../store/actions/user.actions';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  private readonly BASE_URL = 'http://localhost:5000';
  private readonly REGISTER = '/users/register';
  private readonly SIGN_IN = '/users/signIn';
  private readonly GET_TOKEN = '/users/getToken';

  constructor(private httpClient: HttpClient, private googleAuthService: GoogleAuthService, private store: Store, private router: Router) {
  }

  authenticateUser(userPayload: UserPayload): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}${this.SIGN_IN}`, userPayload);
  }

  registerUser(userPayload: UserPayload): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}${this.REGISTER}`, userPayload);
  }

  getToken(res: GoogleUser): void {
    this.httpClient.get(`${this.BASE_URL}${this.GET_TOKEN}`)
      .subscribe((token: any) => {
        this.router.navigate(['/home']);
        this.store.dispatch(socialMediaAuthenticateUserSuccessAction({username: res.getBasicProfile().getEmail(), token: token.token}));
      });
  }

  socialMediaSignIn(): void {
    this.googleAuthService.getAuth().subscribe((auth) => {
      auth.signIn()
        .then(res => this.getToken(res), (err) => this.store.dispatch(socialMediaAuthenticateUserFailedAction(err)));
    });
  }
}
