import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { GuardGuard } from './guard.guard';
import { HomeComponent } from './home/home.component';
const routes: Routes = [

  {path:'sign-up',component:SignUpComponent},
  {path:'home',component:HomeComponent},
  {path:'sign-in',component:SignInComponent},
  {path:'profile',canActivate:[GuardGuard], component:ProfileComponent},
  {path:'**',component:ProfileComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
