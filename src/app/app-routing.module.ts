/* tslint:disable:no-trailing-whitespace */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
import {AccountComponent} from './components/account/account.component';
import {EditAccountComponent} from './components/edit-account/edit-account.component';
import {ChangePasswordComponent} from './components/change-password/change-password.component';
import {SubscriptionsComponent} from './components/subscriptions/subscriptions.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "profile", component: ProfileComponent},
  {path: "account", component: AccountComponent},
  {path: "editAcc", component: EditAccountComponent},
  {path: "changePassword", component: ChangePasswordComponent},
  {path: "subs", component: SubscriptionsComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
