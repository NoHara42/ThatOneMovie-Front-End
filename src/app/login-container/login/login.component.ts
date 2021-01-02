import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {UserPayload} from '../../store/actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user =  new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  @Input() error: string;

  @Output() emitSignInUser = new EventEmitter<UserPayload>();
  @Output() emitSocialMediaSignIn = new EventEmitter<null>();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public signIn(): void {
    this.emitSignInUser.emit(this.user.value);
  }

  public socialMediaSignIn(): void {
    this.emitSocialMediaSignIn.emit(null);
  }

}
