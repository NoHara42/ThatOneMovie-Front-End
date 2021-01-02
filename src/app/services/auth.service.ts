import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserPayload} from '../store/actions/user.actions';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  private readonly BASE_URL = 'http://localhost:3000';
  private readonly REGISTER = '/users/register';

  constructor(private httpClient: HttpClient) {
  }

  authenticateUser(userPayload: UserPayload): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}`, userPayload);
  }

  registerUser(userPayload: UserPayload): Observable<any> {
    return this.httpClient.post(`${this.BASE_URL}${this.REGISTER}`, userPayload);
  }
}
