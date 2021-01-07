import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginContainerComponent} from './login-container/login-container.component';
import {HomeComponent} from './container-home/home/home.component';
import {RegisterContainerComponent} from './register-container/register-container.component';

const routes: Routes = [
  {path: '', component: LoginContainerComponent},
  {path: 'register', component: RegisterContainerComponent},
  {path: 'home', component: HomeComponent},
  {path: '*', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
