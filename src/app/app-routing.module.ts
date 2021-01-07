import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginContainerComponent} from './login-container/login-container.component';
import {RegisterContainerComponent} from './register-container/register-container.component';
import {ContainerHomeComponent} from './container-home/container-home.component';

const routes: Routes = [
  {path: '', component: LoginContainerComponent},
  {path: 'register', component: RegisterContainerComponent},
  {path: 'home', component: ContainerHomeComponent},
  {path: '*', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
