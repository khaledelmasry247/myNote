import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import{HttpClientModule}from'@angular/common/http';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import{NgxPaginationModule}from'ngx-pagination';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    HomeComponent,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
